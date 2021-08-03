import React from 'react';
import Head from "next/head";
import Hero from "../components/contact/ContactHero";
import Form from "../components/contact/ContactForm";

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