import { useState, useEffect, useMemo } from "react";
import { getPokemonList } from "../services/pokeapi";
import { PokemonListItem } from "../models/pokemon";

//Nesse hook, o filtro é pelo front-end, pois a API não dá endpoint de busca por nome

export const usePokemons = (
	pageSize: number = 20,
	pageOffset: number = 0,
	searchTerm: string = ""
) => {
	const [allPokemons, setAllPokemons] = useState<PokemonListItem[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAllPokemons = async () => {
			try {
				setLoading(true);
				const data = await getPokemonList();
				setAllPokemons(data.results);
			} catch (err) {
				setError("Failed to fetch all pokemons.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchAllPokemons();
	}, []);

	const filteredAndPaginatedPokemons = useMemo(() => {
		let currentPokemons = allPokemons;

		if (searchTerm) {
			currentPokemons = currentPokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		const startIndex = pageOffset;
		const endIndex = startIndex + pageSize;
		const paginatedPokemons = currentPokemons.slice(startIndex, endIndex);

		return {
			pokemons: paginatedPokemons,
			totalCount: currentPokemons.length,
		};
	}, [allPokemons, searchTerm, pageSize, pageOffset]);

	return {
		pokemons: filteredAndPaginatedPokemons.pokemons,
		loading,
		error,
		totalCount: filteredAndPaginatedPokemons.totalCount,
	};
};
