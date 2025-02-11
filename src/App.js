import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dog from './Dog';  
import './App.css';

function App(props) {
  const dogs = props.dogs || [];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dogs' element={<Home dogs={dogs}/>}/>
          {dogs.map((dog) => (
            <Route key={dog.name} path={`/dogs/${dog.name.toLowerCase()}`} element={<Dog name={dog.name} age={dog.age} src={dog.src} facts={dog.facts} />} />
          ))}
          <Route path='*' element={<Home dogs={dogs} />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_16_9_1200x675/public/field_blog_entry_teaser_image/2020-06/angry_chihuahua.png.jpg?itok=M2aLtYVc',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
