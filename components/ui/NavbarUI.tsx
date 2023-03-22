import Image from "next/image";

import { Button, Link, Navbar, Text, useTheme } from "@nextui-org/react";

export const NavbarUI = () => {
  const { isDark } = useTheme();

  return (
    <Navbar isCompact isBordered={isDark} variant="floating">
      <Navbar.Brand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Logo de la App"
          width={90}
          height={90}
        />
        <Text b color="inherit" hideIn="xs" size="$2xl">
          P
        </Text>
        <Text b color="inherit" hideIn="xs" size="$md">
          okémon
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat as={Link} color="secondary" href="#">
            Favorites
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
