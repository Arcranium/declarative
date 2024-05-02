import {Config} from "tailwindcss";
import {App} from "vue";
import resolveConfig from "tailwindcss/resolveConfig";

export type DeclarativePluginRequiredOptions = {
    tailwindConfig: Config
}

export function DeclarativePlugin(requiredOptions: DeclarativePluginRequiredOptions) {
    return {
        install: (app: App) => {
            app.provide("tailwind-config", resolveConfig(requiredOptions.tailwindConfig));
        }
    }
}