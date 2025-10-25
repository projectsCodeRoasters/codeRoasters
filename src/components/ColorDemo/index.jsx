import {
  Box,
  Heading,
  Grid,
  Text,
  Stack,
  Badge,
  Button,
  Card,
} from "@chakra-ui/react";

const ColorDemo = () => {
  const colorSets = [
    {
      name: "Primary (Verde Neón)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      base: "primary",
    },
    {
      name: "Secondary (Naranja)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      base: "secondary",
    },
    {
      name: "Tertiary (Marrón Oscuro)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      base: "tertiary",
    },
    {
      name: "Accent (Crema)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      base: "accent",
    },
  ];

  const backgrounds = [
    { name: "Primary", color: "bg.primary" },
    { name: "Secondary", color: "bg.secondary" },
    { name: "Dark", color: "bg.dark" },
    { name: "Darker", color: "bg.darker" },
    { name: "Foam (Espuma de café)", color: "bg.foam" },
  ];

  const textColors = [
    { name: "Primary", color: "text.primary" },
    { name: "Secondary", color: "text.secondary" },
    { name: "Light", color: "text.light" },
    { name: "Lighter", color: "text.lighter" },
    { name: "Success", color: "text.success" },
    { name: "Warning", color: "text.warning" },
  ];

  return (
    <Box p={8} bg="bg.canvas" minH="100vh">
      <Heading mb={8} color="fg.default" textAlign="center">
        🎨 Code Roasters - Demo de Colores
      </Heading>

      {/* Paletas de Colores */}
      <Stack gap={8} mb={12}>
        {colorSets.map((set) => (
          <Box key={set.name}>
            <Heading size="lg" mb={4} color="fg.default">
              {set.name}
            </Heading>
            <Grid
              templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
              gap={2}
            >
              {set.shades.map((shade) => (
                <Box
                  key={shade}
                  bg={`${set.base}.${shade}`}
                  p={4}
                  textAlign="center"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="border.default"
                >
                  <Text fontWeight="bold" fontSize="sm">
                    {shade}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>

      {/* Colores de Fondo */}
      <Box mb={12}>
        <Heading size="lg" mb={4} color="fg.default">
          Fondos (Backgrounds)
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {backgrounds.map((bg) => (
            <Box
              key={bg.name}
              bg={bg.color}
              p={6}
              borderRadius="md"
              border="2px solid"
              borderColor="border.default"
              textAlign="center"
            >
              <Text fontWeight="bold" color="fg.default">
                {bg.name}
              </Text>
              <Text fontSize="sm" color="fg.muted" mt={2}>
                {bg.color}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Colores de Texto */}
      <Box mb={12}>
        <Heading size="lg" mb={4} color="fg.default">
          Textos
        </Heading>
        <Stack gap={3} bg="bg.surface" p={6} borderRadius="md">
          {textColors.map((text) => (
            <Text key={text.name} color={text.color} fontSize="lg">
              {text.name} - {text.color} - The quick brown fox jumps over the
              lazy dog
            </Text>
          ))}
        </Stack>
      </Box>

      {/* Componentes de Ejemplo */}
      <Box mb={12}>
        <Heading size="lg" mb={4} color="fg.default">
          Componentes
        </Heading>
        <Stack gap={6}>
          {/* Botones */}
          <Box
            bg="bg.surface"
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor="border.default"
          >
            <Text fontWeight="bold" mb={4} color="fg.default" fontSize="xl">
              Botones
            </Text>
            <Stack gap={5}>
              {/* Solid Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Solid:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="solid"
                    bg="secondary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "secondary.600" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="solid"
                    bg="tertiary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "tertiary.600" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Subtle Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Subtle:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    variant="subtle"
                    bg="primary.50"
                    color="primary.700"
                    borderRadius="md"
                    _hover={{ bg: "primary.100" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="subtle"
                    bg="secondary.50"
                    color="secondary.700"
                    borderRadius="md"
                    _hover={{ bg: "secondary.100" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="subtle"
                    bg="tertiary.50"
                    color="tertiary.700"
                    borderRadius="md"
                    _hover={{ bg: "tertiary.100" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Surface Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Surface:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    variant="surface"
                    bg="primary.100"
                    color="primary.800"
                    borderRadius="md"
                    _hover={{ bg: "primary.200" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="surface"
                    bg="secondary.100"
                    color="secondary.800"
                    borderRadius="md"
                    _hover={{ bg: "secondary.200" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="surface"
                    bg="tertiary.100"
                    color="tertiary.800"
                    borderRadius="md"
                    _hover={{ bg: "tertiary.200" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Outline Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Outline:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    bg="transparent"
                    borderWidth="2px"
                    borderStyle="solid"
                    borderColor="primary.500"
                    color="primary.500"
                    borderRadius="md"
                    _hover={{ bg: "primary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    bg="transparent"
                    borderWidth="2px"
                    borderStyle="solid"
                    borderColor="secondary.500"
                    color="secondary.500"
                    borderRadius="md"
                    _hover={{ bg: "secondary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    bg="transparent"
                    borderWidth="2px"
                    borderStyle="solid"
                    borderColor="tertiary.500"
                    color="tertiary.500"
                    borderRadius="md"
                    _hover={{ bg: "tertiary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Ghost Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Ghost:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    variant="ghost"
                    color="primary.500"
                    borderRadius="md"
                    _hover={{ bg: "primary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="ghost"
                    color="secondary.500"
                    borderRadius="md"
                    _hover={{ bg: "secondary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="ghost"
                    color="tertiary.500"
                    borderRadius="md"
                    _hover={{ bg: "tertiary.50" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Plain Buttons */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Plain:
                </Text>
                <Stack direction="row" gap={3} flexWrap="wrap">
                  <Button
                    variant="plain"
                    color="primary.500"
                    borderRadius="md"
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Primary
                  </Button>
                  <Button
                    variant="plain"
                    color="secondary.500"
                    borderRadius="md"
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="plain"
                    color="tertiary.500"
                    borderRadius="md"
                    size="lg"
                    px={6}
                    py={3}
                  >
                    Tertiary
                  </Button>
                </Stack>
              </Box>

              {/* Tamaños */}
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Diferentes Tamaños (Primary Solid):
                </Text>
                <Stack
                  direction="row"
                  gap={3}
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="xs"
                    px={3}
                    py={1}
                  >
                    XS
                  </Button>
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="sm"
                    px={4}
                    py={2}
                  >
                    SM
                  </Button>
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="md"
                    px={5}
                    py={2.5}
                  >
                    MD
                  </Button>
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="lg"
                    px={6}
                    py={3}
                  >
                    LG
                  </Button>
                  <Button
                    variant="solid"
                    bg="primary.500"
                    color="white"
                    borderRadius="md"
                    _hover={{ bg: "primary.600" }}
                    size="xl"
                    px={7}
                    py={4}
                  >
                    XL
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Badges */}
          <Box
            bg="bg.surface"
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor="border.default"
          >
            <Text fontWeight="bold" mb={4} color="fg.default" fontSize="xl">
              Badges
            </Text>
            <Stack gap={4}>
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Solid:
                </Text>
                <Stack
                  direction="row"
                  gap={3}
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Badge colorPalette="primary" size="lg">
                    Primary Badge
                  </Badge>
                  <Badge colorPalette="secondary" size="lg">
                    Secondary Badge
                  </Badge>
                  <Badge colorPalette="tertiary" size="lg">
                    Tertiary Badge
                  </Badge>
                  <Badge bg="accent.500" color="tertiary.700" size="lg">
                    Accent Badge
                  </Badge>
                </Stack>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Outline:
                </Text>
                <Stack
                  direction="row"
                  gap={3}
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Badge variant="outline" colorPalette="primary" size="lg">
                    Outline Primary
                  </Badge>
                  <Badge variant="outline" colorPalette="secondary" size="lg">
                    Outline Secondary
                  </Badge>
                  <Badge variant="outline" colorPalette="tertiary" size="lg">
                    Outline Tertiary
                  </Badge>
                </Stack>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  mb={3}
                  color="fg.muted"
                  fontWeight="semibold"
                >
                  Variante Subtle:
                </Text>
                <Stack
                  direction="row"
                  gap={3}
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Badge variant="subtle" colorPalette="primary" size="lg">
                    Subtle Primary
                  </Badge>
                  <Badge variant="subtle" colorPalette="secondary" size="lg">
                    Subtle Secondary
                  </Badge>
                  <Badge variant="subtle" colorPalette="tertiary" size="lg">
                    Subtle Tertiary
                  </Badge>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Cards */}
          <Box>
            <Text fontWeight="bold" mb={3} color="fg.default">
              Cards:
            </Text>
            <Grid
              templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
              gap={4}
            >
              <Card.Root>
                <Card.Body>
                  <Card.Title>Card con Primary</Card.Title>
                  <Card.Description>
                    Esta es una tarjeta de ejemplo usando los colores del tema
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button colorPalette="primary" size="sm">
                    Acción
                  </Button>
                </Card.Footer>
              </Card.Root>

              <Card.Root borderColor="border.secondary">
                <Card.Body>
                  <Card.Title color="secondary.500">
                    Card con Secondary
                  </Card.Title>
                  <Card.Description>
                    Bordes y colores personalizados
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button colorPalette="secondary" size="sm">
                    Acción
                  </Button>
                </Card.Footer>
              </Card.Root>

              <Card.Root bg="tertiary.500">
                <Card.Body>
                  <Card.Title color="text.light">Card con Tertiary</Card.Title>
                  <Card.Description color="text.lighter">
                    Fondo oscuro con texto claro
                  </Card.Description>
                </Card.Body>
                <Card.Footer>
                  <Button colorPalette="accent" size="sm">
                    Acción
                  </Button>
                </Card.Footer>
              </Card.Root>
            </Grid>
          </Box>

          {/* Bordes */}
          <Box>
            <Text fontWeight="bold" mb={3} color="fg.default">
              Bordes:
            </Text>
            <Grid
              templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
              gap={4}
            >
              <Box
                p={4}
                border="3px solid"
                borderColor="border.primary"
                borderRadius="md"
                textAlign="center"
              >
                <Text fontWeight="bold">Primary Border</Text>
              </Box>
              <Box
                p={4}
                border="3px solid"
                borderColor="border.secondary"
                borderRadius="md"
                textAlign="center"
              >
                <Text fontWeight="bold">Secondary Border</Text>
              </Box>
              <Box
                p={4}
                border="3px solid"
                borderColor="border.tertiary"
                borderRadius="md"
                textAlign="center"
              >
                <Text fontWeight="bold">Tertiary Border</Text>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </Box>

      {/* Info de Colores Code Roasters */}
      <Card.Root bg="bg.foam" borderColor="border.primary" borderWidth="2px">
        <Card.Body>
          <Card.Title color="tertiary.500" mb={2}>
            ☕ Paleta Code Roasters
          </Card.Title>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3}>
            <Box>
              <Text fontWeight="bold" color="primary.500">
                🟢 Verde Neón (#00df00)
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Energía y frescura
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="secondary.500">
                🟠 Naranja (#ff7b00)
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Calidez y creatividad
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="tertiary.500">
                🟤 Marrón Oscuro (#5e2f2f)
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Café y sofisticación
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="accent.500">
                🟡 Crema (#ffeecf)
              </Text>
              <Text fontSize="sm" color="fg.muted">
                Espuma y suavidad
              </Text>
            </Box>
          </Grid>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ColorDemo;
