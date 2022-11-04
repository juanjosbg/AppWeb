import React from "react";
import Carta from './carta';

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const Cartas = [
  {
    id: 1,
    title: "Web",
    image: image1,
    url: "",
    text: 'hola mundo hello world'
  },
  {
    id: 2,
    title: "Blog",
    image: image2,
    url: "",
    text: 'hola todos'
  },
  {
    id: 3,
    title: "Youtube",
    image: image3,
    url: "",
    text: 'hola profe'
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {Cartas.map(({ title, image, url, id, text}) => (
          <div className="col-md-4" key={id}>
            <Carta imageSource={image} title={title} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;