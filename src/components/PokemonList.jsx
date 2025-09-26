import { useEffect, useState } from "react";
import "./Pokemon.css";

export const PokemonList = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type/${type}`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const firstFive = data.pokemon.slice(0, 5);
        const promises = firstFive.map((p) =>
          fetch(p.pokemon.url)
            .then((res) => res.json())
            .then((info) => ({
              name: info.name,
              image: info.sprites.front_default,
            }))
        );

        Promise.all(promises).then((results) => {
          setPokemons(results);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error al obtener pokemones", error);
        setLoading(false);
      });
  }, [type]);

  // Se ejecuta cuando cambia el tipo

  return (
    <ul className="pokemon-list">
      {pokemons.map((p, index) => (
        <li key={index} className="pokemon-card">
          <p className="pokemon-name">{p.name}</p>
          <img src={p.image} alt={p.name} className="pokemon-image" />
        </li>
      ))}
    </ul>
  );
};
