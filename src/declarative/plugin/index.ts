import type {PluginOptions} from "@lib/types";
import type {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import {initializeImperativeModalRenderer} from "@lib/imperative";
import {createPinia} from "pinia";
import {fillDefaults} from "@lib/types";

export function declarativeProvideAppContext(app: App) {
    app.provide("declarative-app-context", app._context);
}

export function declarativeProvideTailwindConfig(app: App, tailwindConfig: any) {
    app.provide("tailwind-config", resolveConfig(tailwindConfig))
}

export const declarativePlugin = (pluginOptions: Partial<PluginOptions>): any => {
    const pluginOptionsFilled = fillDefaults(pluginOptions, {
        tailwindConfig: {},
        teleportRoot: () => document.body
    })

    return (app: App) => {
        console.log("[declarative] (declarativePlugin) Initializing")

        declarativeProvideAppContext(app)
        declarativeProvideTailwindConfig(app, pluginOptionsFilled.tailwindConfig)

        initializeImperativeModalRenderer(app._context)
    };
};