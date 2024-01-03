import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "VeryDarkCyan": "hsl(183, 100%, 15%)",
        "DarkGrayishCyan": "hsl(186, 14%, 43%)",
        "GrayishCyan": "hsl(184, 14%, 56%)",
        "LightGrayishCyan": "hsl(185, 41%, 84%)",
        "VeryLightCrayishCyan": "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
      },
      textColor:{
        "VeryDarkCyan": "hsl(183, 100%, 15%)",
        "DarkGrayishCyan": "hsl(186, 14%, 43%)",
        "GrayishCyan": "hsl(184, 14%, 56%)",
        "LightGrayishCyan": "hsl(185, 41%, 84%)",
        "VeryLightCrayishCyan": "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
