import Head from "next/head";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { createClient } from "@supabase/supabase-js";
import Component from "../components/Component";
import { Box, Container, Input, Stack, Text } from "@chakra-ui/react";

let files: any = [];

export default function Index() {
  const { app } = useAppContext();

  return (
    <div>
      <Head>
        <title>App</title>
      </Head>
      <Container maxW="container.lg"></Container>
    </div>
  );
}
