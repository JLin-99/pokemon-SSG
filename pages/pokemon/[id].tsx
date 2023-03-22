import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Pokemon } from "@/interfaces";
import { pokeAPI } from "@/api";
import { Layout } from "@/components/layouts";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout
      title={
        "Pokémon - " +
        pokemon.name.charAt(0).toUpperCase() +
        pokemon.name.substring(1).toLowerCase()
      }
    >
      <Grid.Container gap={1} justify="center" css={{ padding: 0 }}>
        <Grid xs={12} sm={4}>
          <Card isHoverable>
            <Card.Header css={{ position: "absolute", zIndex: 1 }}>
              <Text
                size={12}
                weight="bold"
                color="#9E9E9E"
                css={{ marginRight: 7 }}
              >
                {"#" + pokemon.id}
              </Text>
            </Card.Header>
            <Card.Body css={{ padding: 30 }}>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ padding: "12px 24px 24px 24px" }}>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
                "@xsMax": { flexDirection: "column" },
              }}
            >
              <Text
                h1
                transform="capitalize"
                css={{
                  textShadow:
                    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
                }}
              >
                {pokemon.name}
              </Text>

              <Button color="gradient" ghost>
                Save to favorites
              </Button>
            </Card.Header>

            <Card.Body css={{ padding: 0 }}>
              <Text
                size={24}
                css={{
                  textShadow:
                    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
                }}
              >
                Sprites:
              </Text>

              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonIdxs = [...Array(151)].map((_, idx) => `${idx + 1}`);

  return {
    paths: pokemonIdxs.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
