import { FC } from "react";

import { Button, Card, Col, Row, Text, useTheme } from "@nextui-org/react";
import { TiStarOutline } from "react-icons/ti";

import { SmallPokemon } from "@/interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { theme } = useTheme();

  return (
    <Card css={{ w: "100%", h: "200px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1 }}>
        <Row>
          <Text
            size={12}
            weight="bold"
            color="#9E9E9E"
            css={{ marginRight: 7 }}
          >
            {"#" + pokemon.id}
          </Text>
          <Text
            transform="capitalize"
            h4
            color="white"
            weight="bold"
            css={{
              textShadow:
                "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
            }}
          >
            {pokemon.name}
          </Text>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src={pokemon.img}
          width="100%"
          height="100%"
          objectFit="contain"
          alt={pokemon.name}
        />
      </Card.Body>
      <Card.Footer
        css={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="flex-end">
          <Button flat auto bordered rounded color="gradient">
            <TiStarOutline size={20} color={theme?.colors.secondary.value} />
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};
