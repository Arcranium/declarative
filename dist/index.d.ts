import * as components from './components';
import type { PluginOptions } from './types';
import "./styles/index.css";
declare const declarativePlugin: (pluginOptions: PluginOptions) => any;
export * from './components';
export { declarativePlugin, components };
