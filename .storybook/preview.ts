import {Preview, setup} from "@storybook/vue3";
import '../lib/styles/main.css'
import {DeclarativePlugin} from "../lib/plugin/plugin";
import tailwindConfig from "../tailwind.config.js";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  app.use(DeclarativePlugin({
    tailwindConfig: tailwindConfig
  }));
})

export default preview;
