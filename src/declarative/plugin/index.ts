import type {PluginOptions} from "@lib/types";
import type {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import {initializeImperativeModalRenderer} from "@lib/imperative";
import {createPinia} from "pinia";
import {fillDefaults} from "@lib/types";

export const declarativePlugin = (pluginOptions: Partial<PluginOptions>): any => {
    const pluginOptionsFilled = fillDefaults(pluginOptions, {
        tailwindConfig: {},
        teleportRoot: () => document.body
    })

    return (app: App) => {
        console.log("[declarative] (declarativePlugin) Initializing")

        app.provide("tailwind-config", resolveConfig(pluginOptionsFilled.tailwindConfig));
        app.provide("declarative-app-context", app._context);

        initializeImperativeModalRenderer(app._context);
    };
};