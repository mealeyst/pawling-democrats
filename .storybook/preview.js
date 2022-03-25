import { BlueTheme } from "../src/theme/Theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <BlueTheme>
      <Story />
    </BlueTheme>
  ),
];