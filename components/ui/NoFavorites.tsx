import { Container, Image, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      display="grid"
      justify="center"
      alignContent="center"
      css={{ height: "100%" }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
        alt="No favorites"
      />
      <Text h1 css={{ textAlign: "center" }}>
        No favorites
      </Text>
    </Container>
  );
};
export default NoFavorites;
