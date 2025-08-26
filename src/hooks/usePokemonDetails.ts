import { useState, useEffect } from 'react';
import { getPokemonDetail } from '../services/pokeapi';
import { PokemonDetail } from '../models/pokemon';

export const usePokemonDetails = (nameOrId: string | number) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!nameOrId) return;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const data = await getPokemonDetail(nameOrId);
        setPokemon(data);
      } catch (err) {
        setError(`Failed to fetch details for ${nameOrId}.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [nameOrId]);

  return { pokemon, loading, error };
};