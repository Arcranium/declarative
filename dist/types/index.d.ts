import * as components from '../components';
export * from '../index';
export * from '../components';
export type ComponentName = keyof typeof components;
export type PluginOptions = {
    tailwindConfig: any;
};
