import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from 'src/components/home/Newsletter';

export default function Layout(props) {
  return (
    <>
      <Header content={props.content.header} />
      <main>
        {
          props.children
        }
      </main>
      <Footer content={props.content.footer} />
    </>
  )
}