import { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { pokeAPI } from "@/api";
import { PokemonListResponse, SmallPokemons } from "@/interfaces";

interface Props {
  pokemons: SmallPokemons[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon List">
      <Grid.Container gap={2} justify="center"></Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeAPI.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemons[] = data.results.map((pokemon, idx) => {
    return {
      ...pokemon,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        idx + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
