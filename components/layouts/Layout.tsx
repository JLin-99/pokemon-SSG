import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Container } from "@nextui-org/react";

import { Navbar } from "../ui";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="José Lin" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <Container md css={{ marginTop: "20px" }}>
        {children}
      </Container>
    </>
  );
};
