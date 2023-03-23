import { useEffect, useState } from "react";

import { Grid } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import { FavoritePokemonCard } from "@/components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorite Pokémons">
      {!favoritePokemons.length ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="center">
          {favoritePokemons.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <FavoritePokemonCard id={id} />
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};
export default FavoritesPage;
