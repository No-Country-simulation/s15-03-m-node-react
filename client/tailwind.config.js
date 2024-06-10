import daisyui from "./node_modules/daisyui";
import flowbite from "./node_modules/flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", "serif"], // Titulos
        worksans: ["Work Sans", "sans-serif"], // Textos en general
      },
    },
  },
  plugins: [daisyui, flowbite],
  daisyui: {
    themes:
      // Aca guardamos nuestro tema con las variables que nos proporciona daisyUI y le ponemos nuestros colores
      [
        {
          buildingHub: {
            primary: "#483AE7", // Color azul primario, destacar titulos, borders de inputs, icons
            "--primary-focus": "red",
            "primary-content": "#F5F6FA",
            secondary: "#ffa500", // Color de Naranja para los acentos, para botones que necesitan destacar
            accent: "#FFF7ED", // Color naranja claro para el background de los acentos
            "--accent-focus": "red",
            "accent-content": "blue",
            "base-100": "#F5F6FA", // Color de fondo principal (blanco principal)
            "base-200": "#EEF2FF", // Color de fondo de inputs, navbar, footer, modales, entre otros (violeta muy clarito)
            "base-300": "#171925", // Color de fondo para secciones de la landing page (azul muy oscuro, no lo vi en otro lado asiq no puedo decir donde mas va)
            info: "#3ABFF8",

            neutral: "#DFE6FF", // NO se usa pero tiene q estar porq sino el daisyUI da problemas jaja
            "--neutral-focus": "blue",
            "neutral-content": "#171925",
            "base-content": "#171925", // Color de todos los textos (si a su componente no le dan un color, este es el color q le damos por defecto)
          },
        },
        // Otro tema "buildingHubDark" y este seria el tema oscuro de la app
      ],
  },
};
