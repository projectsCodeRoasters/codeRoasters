import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";

const customConfig = {
  theme: {
    recipes: {
      button: defineRecipe({
        base: {
          fontWeight: "semibold",
          borderRadius: "md",
        },
        variants: {
          variant: {
            solid: {
              bg: "colorPalette.500",
              color: "white",
              _hover: {
                bg: "colorPalette.600",
              },
            },
            subtle: {
              bg: "colorPalette.50",
              color: "colorPalette.700",
              _hover: {
                bg: "colorPalette.100",
              },
            },
            surface: {
              bg: "colorPalette.100",
              color: "colorPalette.800",
              _hover: {
                bg: "colorPalette.200",
              },
            },
            outline: {
              borderWidth: "2px",
              borderColor: "colorPalette.500",
              color: "colorPalette.500",
              _hover: {
                bg: "colorPalette.50",
              },
            },
            ghost: {
              color: "colorPalette.500",
              _hover: {
                bg: "colorPalette.50",
              },
            },
            plain: {
              color: "colorPalette.500",
              _hover: {
                textDecoration: "underline",
              },
            },
          },
        },
      }),
      badge: defineRecipe({
        base: {
          fontWeight: "medium",
          borderRadius: "sm",
          px: 2,
          py: 0.5,
        },
        variants: {
          variant: {
            solid: {
              bg: "colorPalette.500",
              color: "white",
            },
            subtle: {
              bg: "colorPalette.100",
              color: "colorPalette.800",
            },
            outline: {
              borderWidth: "1px",
              borderColor: "colorPalette.500",
              color: "colorPalette.500",
            },
          },
        },
      }),
    },
    tokens: {
      colors: {
        // Colores principales
        primary: {
          50: { value: "#e6ffe6" },
          100: { value: "#b3ffb3" },
          200: { value: "#80ff80" },
          300: { value: "#4dff4d" },
          400: { value: "#1aff1a" },
          500: { value: "#00df00" }, // Verde neón principal
          600: { value: "#00b300" },
          700: { value: "#008600" },
          800: { value: "#005a00" },
          900: { value: "#002d00" },
        },
        secondary: {
          50: { value: "#ffefe6" },
          100: { value: "#ffd4b3" },
          200: { value: "#ffb980" },
          300: { value: "#ff9f4d" },
          400: { value: "#ff8d1a" },
          500: { value: "#ff7b00" }, // Naranja principal
          600: { value: "#cc6200" },
          700: { value: "#994a00" },
          800: { value: "#663100" },
          900: { value: "#331900" },
        },
        tertiary: {
          50: { value: "#f5e6e6" },
          100: { value: "#e0b3b3" },
          200: { value: "#cb8080" },
          300: { value: "#b64d4d" },
          400: { value: "#8a3b3b" },
          500: { value: "#5e2f2f" }, // Marrón oscuro principal
          600: { value: "#4b2626" },
          700: { value: "#381c1c" },
          800: { value: "#251313" },
          900: { value: "#130909" },
        },
        accent: {
          50: { value: "#fefcf9" },
          100: { value: "#fef9f1" },
          200: { value: "#fef6e9" },
          300: { value: "#fff3e1" },
          400: { value: "#fff0d8" },
          500: { value: "#ffeecf" }, // Crema principal
          600: { value: "#ccbea6" },
          700: { value: "#998f7c" },
          800: { value: "#665f53" },
          900: { value: "#333029" },
        },
        // Colores de fondo
        bg: {
          primary: { value: "#ffeecf" },
          secondary: { value: "#fff9f1" },
          dark: { value: "#5e2f2f" },
          darker: { value: "#381c1c" },
          foam: { value: "#D4A574" }, // Espuma de café
        },
        // Colores de texto
        text: {
          primary: { value: "#5e2f2f" },
          secondary: { value: "#8a3b3b" },
          light: { value: "#ffeecf" },
          lighter: { value: "#fff9f1" },
          success: { value: "#00df00" },
          warning: { value: "#ff7b00" },
        },
        // Colores de borde
        border: {
          primary: { value: "#00df00" },
          secondary: { value: "#ff7b00" },
          tertiary: { value: "#5e2f2f" },
          light: { value: "#ccbea6" },
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
            base: "{colors.accent.100}",
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
        "fg.success": {
          value: {
            base: "{colors.text.success}",
            _dark: "{colors.primary.400}",
          },
        },
        "fg.warning": {
          value: {
            base: "{colors.text.warning}",
            _dark: "{colors.secondary.400}",
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
