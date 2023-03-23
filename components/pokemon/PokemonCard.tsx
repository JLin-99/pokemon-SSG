import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Button, Card, Row, Text } from "@nextui-org/react";
import { TiStar, TiStarOutline } from "react-icons/ti";
import confetti from "canvas-confetti";

import { SmallPokemon } from "@/interfaces";
import { localFavorites } from "@/utils";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(+pokemon.id));
  }, []);

  const router = useRouter();

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(+pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 50,
        spread: 80,
        angle: 100,
        origin: {
          x: 0.5,
          y: 1,
        },
      });
    }
  };

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card
      isHoverable
      isPressable
      css={{ w: "100%", h: "200px" }}
      onClick={onClick}
    >
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
          <Button
            color="gradient"
            onPress={onToggleFavorite}
            auto
            bordered={!isInFavorites}
            rounded
            css={{
              padding: 16,
            }}
          >
            {isInFavorites ? <TiStar size={20} /> : <TiStarOutline size={20} />}
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};
