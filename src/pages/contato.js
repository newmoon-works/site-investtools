import React from 'react';
import Head from "next/head";
import Hero from "../components/contact/Hero";
import Form from "../components/contact/Form";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Investtools</title>
      </Head>

      <Hero/>
      <Form/>
    </>
  )
}