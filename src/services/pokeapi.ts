import { PokemonListResponse, PokemonDetail } from '../models/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit: number = 10000, offset: number = 0): Promise<PokemonListResponse> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }
  return response.json();
};

export const getPokemonDetail = async (nameOrId: string | number): Promise<PokemonDetail> => {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch details for ${nameOrId}`);
  }
  return response.json();
};