import type { App } from 'vue'
import * as components from './components'
import type { PluginOptions, ComponentName } from './types'
import "./styles/index.css";

import { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

const declarativePlugin = (pluginOptions: PluginOptions): any => {
    return (app: App) => {
        app.provide("tailwind-config", resolveConfig(pluginOptions.tailwindConfig));
    };
};

export * from './components';
export * from "./util";
export {
    declarativePlugin,
    components
};