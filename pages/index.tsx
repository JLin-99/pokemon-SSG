import { NextPage } from "next";

import { Button } from "@nextui-org/react";

import React from "react";
import { Layout } from "@/components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokemon List">
      <Button color="gradient">Home Page</Button>
    </Layout>
  );
};

export default HomePage;
