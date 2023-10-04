import React from "react";
import Image from "next/image";
import card1 from "/public/img/c1.png";
import card2 from "/public/img/c2.png";
import card3 from "/public/img/c3.png";
import cards from "/app/data/card.js";

const Cards = () => {
  return (
    <div className="w-fill p-2 rounded-3xl bg-[#374945] ">
      {cards.map((card, key) => (
        <div key={key}>
          <p>{card.name}</p>
          <Image src={card.src} alt="card" width={card.width} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
