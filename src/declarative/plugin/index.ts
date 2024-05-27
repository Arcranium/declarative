import type {PluginOptions} from "@lib/types";
import type {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import {initializeImperativeModalRenderer} from "@lib/imperative";
import {createPinia} from "pinia";
import {fillDefaults} from "@lib/types";

export function declarativeInjectAppContext(app: App) {
    app.provide("declarative-app-context", app._context);
}

export const declarativePlugin = (pluginOptions: Partial<PluginOptions>): any => {
    const pluginOptionsFilled = fillDefaults(pluginOptions, {
        tailwindConfig: {},
        teleportRoot: () => document.body
    })

    return (app: App) => {
        console.log("[declarative] (declarativePlugin) Initializing")

        declarativeInjectAppContext(app)
        app.provide("tailwind-config", resolveConfig(pluginOptionsFilled.tailwindConfig))

        initializeImperativeModalRenderer(app._context)
    };
};