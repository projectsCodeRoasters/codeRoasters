import { createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
  theme: {
    tokens: {
      colors: {
        // Colores principales basados en la imagen
        primary: {
          50: { value: "#fff5eb" },
          100: { value: "#ffe4cc" },
          200: { value: "#ffd1a3" },
          300: { value: "#ffbe7a" },
          400: { value: "#ffab52" },
          500: { value: "#ff9829" }, // Naranja principal de la imagen
          600: { value: "#e67a00" },
          700: { value: "#b35f00" },
          800: { value: "#804500" },
          900: { value: "#4d2a00" },
        },
        secondary: {
          50: { value: "#fef9f4" },
          100: { value: "#fdf3e9" },
          200: { value: "#fbe7d3" },
          300: { value: "#f9dbbd" },
          400: { value: "#f7cfa7" },
          500: { value: "#f5c391" }, // Crema/beige de la sección principal
          600: { value: "#d4a574" },
          700: { value: "#a37d57" },
          800: { value: "#72563b" },
          900: { value: "#412f1f" },
        },
        tertiary: {
          50: { value: "#f0e6e6" },
          100: { value: "#d4b3b3" },
          200: { value: "#b88080" },
          300: { value: "#9c4d4d" },
          400: { value: "#802626" },
          500: { value: "#2d1010" }, // Marrón muy oscuro de la sección inferior
          600: { value: "#240d0d" },
          700: { value: "#1b0a0a" },
          800: { value: "#120707" },
          900: { value: "#090404" },
        },
        accent: {
          50: { value: "#fffbf5" },
          100: { value: "#fff6eb" },
          200: { value: "#ffedd6" },
          300: { value: "#ffe4c2" },
          400: { value: "#ffdcad" },
          500: { value: "#ffd399" }, // Amarillo cálido para acentos (del frasco de café)
          600: { value: "#e6b87a" },
          700: { value: "#b38f5c" },
          800: { value: "#80663d" },
          900: { value: "#4d3d1f" },
        },
        // Colores de fondo
        bg: {
          primary: { value: "#f5c391" }, // Beige/crema principal
          secondary: { value: "#fff6eb" }, // Crema muy claro
          dark: { value: "#2d1010" }, // Marrón oscuro
          darker: { value: "#1b0a0a" }, // Casi negro
          orange: { value: "#ff9829" }, // Naranja vibrante
          foam: { value: "#d4a574" }, // Tono café con leche
        },
        // Colores de texto
        text: {
          primary: { value: "#2d1010" }, // Oscuro para texto principal
          secondary: { value: "#802626" }, // Marrón medio
          light: { value: "#f5c391" }, // Claro para texto sobre oscuro
          lighter: { value: "#fff6eb" }, // Muy claro
          onOrange: { value: "#2d1010" }, // Texto sobre naranja
          onDark: { value: "#f5c391" }, // Texto sobre oscuro
        },
        // Colores de borde
        border: {
          primary: { value: "#ff9829" }, // Naranja
          secondary: { value: "#d4a574" }, // Café con leche
          tertiary: { value: "#2d1010" }, // Oscuro
          light: { value: "#f9dbbd" }, // Beige claro
        },
      },
    },
    semanticTokens: {
      colors: {
        // Colores sólidos principales
        "primary.solid": {
          value: {
            base: "{colors.primary.500}",
            _dark: "{colors.primary.400}",
          },
        },
        "secondary.solid": {
          value: {
            base: "{colors.secondary.500}",
            _dark: "{colors.secondary.400}",
          },
        },
        "tertiary.solid": {
          value: {
            base: "{colors.tertiary.500}",
            _dark: "{colors.tertiary.400}",
          },
        },
        "accent.solid": {
          value: { base: "{colors.accent.500}", _dark: "{colors.accent.400}" },
        },

        // Fondos
        "bg.canvas": {
          value: { base: "{colors.bg.primary}", _dark: "{colors.bg.dark}" },
        },
        "bg.surface": {
          value: { base: "{colors.bg.secondary}", _dark: "{colors.bg.darker}" },
        },
        "bg.subtle": {
          value: {
            base: "{colors.secondary.100}",
            _dark: "{colors.tertiary.800}",
          },
        },

        // Textos
        "fg.default": {
          value: {
            base: "{colors.text.primary}",
            _dark: "{colors.text.light}",
          },
        },
        "fg.muted": {
          value: {
            base: "{colors.text.secondary}",
            _dark: "{colors.text.lighter}",
          },
        },
        "fg.onOrange": {
          value: {
            base: "{colors.text.onOrange}",
            _dark: "{colors.text.onOrange}",
          },
        },
        "fg.onDark": {
          value: {
            base: "{colors.text.onDark}",
            _dark: "{colors.text.light}",
          },
        },

        // Bordes
        "border.default": {
          value: {
            base: "{colors.border.light}",
            _dark: "{colors.border.tertiary}",
          },
        },
        "border.primary": {
          value: {
            base: "{colors.border.primary}",
            _dark: "{colors.primary.400}",
          },
        },
        "border.secondary": {
          value: {
            base: "{colors.border.secondary}",
            _dark: "{colors.secondary.400}",
          },
        },

        // Hover y estados interactivos
        "bg.primary.hover": {
          value: {
            base: "{colors.primary.600}",
            _dark: "{colors.primary.300}",
          },
        },
        "bg.secondary.hover": {
          value: {
            base: "{colors.secondary.600}",
            _dark: "{colors.secondary.300}",
          },
        },
        "bg.tertiary.hover": {
          value: {
            base: "{colors.tertiary.600}",
            _dark: "{colors.tertiary.300}",
          },
        },
      },
    },
  },
};

export const system = createSystem(defaultConfig, customConfig);
