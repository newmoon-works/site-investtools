import React, { useState } from 'react';
import Flickity from "react-flickity-component";
import 'flickity/css/flickity.css';

export default function Carousel(props) {
  return (
    <Flickity options={{wrapAround: true, groupCells: props.groupCells }}>
      {
        props.children
      }
    </Flickity>
  )
}