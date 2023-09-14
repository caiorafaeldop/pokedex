import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import GenSelect from '../components/Generation';

export const Home = () => {


  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    var endpoints = [];
    for (let i = 453; i <= 600; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
  }
  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };
  return (
    <div>

      <NavBar pokemonFilter={pokemonFilter} />
      <GenSelect />
      <Container maxWidth="false" >
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => <Grid item xs={6} md={2} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
          </Grid>)}


        </Grid>
      </Container>
    </div>
  )
}
