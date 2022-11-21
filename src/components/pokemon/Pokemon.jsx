import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pokemon.css";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [characterName, setCharacterName] = useState();
  const [moves, setMoves] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setCharacterName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Pokemon</h1>
        </div>
        <h3>
          you chose <span style={{ color: "red" }}>{num}</span>{" "}
        </h3>
        <h3>
          This is <span style={{ color: "red" }}>{characterName}</span>{" "}
        </h3>
        <h3>
          I have <span style={{ color: "red" }}>{moves}</span> moves
        </h3>
        <img src={image} alt="pikachu" />
        <select
          value={num}
          onChange={(event) => {
            setNum(event.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
      </div>
    </>
  );
};

export default Pokemon;
