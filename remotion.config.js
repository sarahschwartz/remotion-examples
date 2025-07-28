// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config"
import { myTheme } from "./customTheme"
 
// transparent background
// Config.setVideoImageFormat("png");
// Config.setPixelFormat("yuva420p");
// Config.setCodec("vp8");

const chConfig = {
  syntaxHighlighting: {
    theme: myTheme,
  },
}

const enableMdx = async (currentConfiguration) => {
  const { remarkCodeHike, recmaCodeHike } = await import("codehike/mdx")
  return {
    ...currentConfiguration,
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules
          ? currentConfiguration.module.rules
          : []),
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: "@mdx-js/loader",
              options: {
                remarkPlugins: [[remarkCodeHike, chConfig]],
                recmaPlugins: [[recmaCodeHike, chConfig]],
              },
            },
          ],
        },
      ],
    },
  }
}

Config.overrideWebpackConfig(enableMdx);
