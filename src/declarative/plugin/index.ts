import type {PluginOptions} from "@lib/types";
import type {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import {initializeImperativeModalRenderer} from "@lib/imperative";

export const declarativePlugin = (pluginOptions: PluginOptions): any => {
    return (app: App) => {
        app.provide("tailwind-config", resolveConfig(pluginOptions.tailwindConfig));
        app.provide("declarative-app-context", app._context);

        initializeImperativeModalRenderer(app._context);
    };
};