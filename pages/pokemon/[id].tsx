import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Pokemon } from "@/interfaces";
import { pokeAPI } from "@/api";
import { Layout } from "@/components/layouts";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <h1>{pokemon.name}</h1>
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
