import daisyui from "./node_modules/daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes:
      // Aca guardamos nuestro tema con las variables que nos proporciona daisyUI y le ponemos nuestros colores
      [
        {
          buildingHub: {
            primary: "#483AE7",
            secondary: "#1e293b",
            accent: "#ffa500",
            neutral: "#ffa500",
            "base-100": "#F5F6FA",
            info: "#3ABFF8",
          },
        },
      ],
  },
};
