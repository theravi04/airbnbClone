import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Comp1 from "./Components/Comp1";
import Card from "./Components/Card";
import data from "./Components/Data";

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        title = {item.title}
        location = {item.location}
        price={item.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Comp1 />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  );
}

export default App;
