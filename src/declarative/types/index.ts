import * as components from '../components'
export * from '../index'
export * from '../components'
export type ComponentName = keyof typeof components

import { Config } from "tailwindcss";

export type PluginOptions = {
  tailwindConfig: any
}