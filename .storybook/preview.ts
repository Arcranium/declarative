import type { Preview } from "@storybook/vue3";

import '../src/declarative/styles/index.css';

import tailwindConfig from "../tailwind.config";

import {setup} from "@storybook/vue3";
import {declarativePlugin} from "../src/declarative";
import {createPinia} from "pinia";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  app.use(declarativePlugin({
    tailwindConfig: tailwindConfig
  }))
})

export default preview;
