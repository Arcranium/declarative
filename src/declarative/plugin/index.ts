import type {PluginOptions} from "@lib/types";
import type {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";
import {initializeImperativeModalRenderer} from "@lib/imperative";
import {createPinia} from "pinia";

export const declarativePlugin = (pluginOptions: PluginOptions): any => {
    return (app: App) => {
        app.use(createPinia());
        app.provide("tailwind-config", resolveConfig(pluginOptions.tailwindConfig));
        app.provide("declarative-app-context", app._context);

        initializeImperativeModalRenderer(app._context);
    };
};