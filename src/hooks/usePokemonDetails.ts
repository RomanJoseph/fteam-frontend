import { useState, useEffect } from "react";
import { getPokemonDetail } from "../services/pokeapi";
import { PokemonDetail } from "../models/pokemon";

interface UsePokemonDetailsReturn {
	pokemon: PokemonDetail | null;
	loading: boolean;
	error: string | null;
	primaryType: string;
}

export const usePokemonDetails = (
	nameOrId: string | number
): UsePokemonDetailsReturn => {
	const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [primaryType, setPrimaryType] = useState<string>("normal");

	useEffect(() => {
		if (!nameOrId) return;

		const fetchPokemon = async () => {
			try {
				setLoading(true);
				const data = await getPokemonDetail(nameOrId);
				setPokemon(data);
				if (data.types && data.types.length > 0) {
					setPrimaryType(data.types[0].type.name);
				}
			} catch (err) {
				setError(`Failed to fetch details for ${nameOrId}.`);
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchPokemon();
	}, [nameOrId]);

	return { pokemon, loading, error, primaryType };
};
