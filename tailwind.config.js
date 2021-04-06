const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ["./**/*.tsx"],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      minWidth: {
        ...defaultTheme.spacing,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // require("@tailwindcss/ui")
  ],
};
