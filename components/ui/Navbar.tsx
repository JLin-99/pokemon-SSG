import NextLink from "next/link";

import { Button, Image, Link, Navbar, Text, useTheme } from "@nextui-org/react";

export const NavbarUI = () => {
  const { isDark } = useTheme();

  return (
    <Navbar isBordered={isDark} variant="floating">
      <Navbar.Brand>
        <Link
          href="/"
          as={NextLink}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Logo de la App"
            width={90}
            height={90}
          />
          <Text
            b
            color="inherit"
            hideIn="xs"
            size="$3xl"
            css={{ marginLeft: -24 }}
          >
            P
          </Text>
          <Text b color="inherit" hideIn="xs" size="$2xl">
            okémon
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button
            auto
            as={NextLink}
            bordered
            color="gradient"
            href="/favorites"
          >
            <Text b color="inherit" size="$sm">
              Favorites
            </Text>
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
