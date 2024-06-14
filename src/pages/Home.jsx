import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import GenSelect from "../components/Generation";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(1); // Carregar a primeira geração por padrão
  }, []);

  const getPokemons = (generation) => {
    let start, end;
    switch (generation) {
      case 1:
        start = 1;
        end = 151;
        break;
      case 2:
        start = 152;
        end = 251;
        break;
      case 3:
        start = 252;
        end = 386;
        break;
      case 4:
        start = 387;
        end = 493;
        break;
      case 5:
        start = 494;
        end = 649;
        break;
      default:
        start = 1;
        end = 151;
    }

    const endpoints = [];
    for (let i = start; i <= end; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    if (name === "") {
      getPokemons(1);
      return;
    }
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.data.name.includes(name)
    );
    setPokemons(filteredPokemons);
  };
  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <GenSelect onSelectGeneration={getPokemons} />
      <Container maxWidth="false">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={6} md={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
