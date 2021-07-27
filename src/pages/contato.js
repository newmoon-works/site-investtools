import React from 'react';
import Head from "next/head";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Investtools</title>
      </Head>

      <ContactHero/>
      <ContactForm/>
    </>
  )
}