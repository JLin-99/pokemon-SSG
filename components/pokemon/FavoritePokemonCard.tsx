import { FC } from "react";

import { useRouter } from "next/router";

import { Card } from "@nextui-org/react";

interface Props {
  id: number;
}

export const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  return (
    <Card
      isHoverable
      isPressable
      css={{ padding: 20 }}
      onPress={() => router.push(`/pokemon/${id}`)}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width="100%"
        height={140}
      />
    </Card>
  );
};
