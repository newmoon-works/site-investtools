import React from 'react';

export default function Layout(props) {
  return (
    <>
      <header />
      {
        props.children
      }
      <footer />
    </>
  )
}