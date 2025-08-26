"use client";

import React from "react";
import { useParams } from "next/navigation";
import { usePokemonDetails } from "../../../hooks/usePokemonDetails";
import {
	BackLink,
	Container,
	DetailItem,
	ErrorMessage,
	LoadingMessage,
	PokemonImage,
	StatItem,
	StatList,
	Title,
} from "./style";

export default function PokemonDetailPage() {
	const params = useParams();
	const pokemonName = params.name as string;
	const { pokemon, loading, error } = usePokemonDetails(pokemonName);

	if (loading) {
		return <LoadingMessage>Loading Pokemon details...</LoadingMessage>;
	}

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}

	if (!pokemon) {
		return <ErrorMessage>Pokemon not found.</ErrorMessage>;
	}

	const imageUrl =
		pokemon.sprites.other?.["official-artwork"]?.front_default ||
		pokemon.sprites.front_default;

	return (
		<Container>
			<Title>{pokemon.name}</Title>
			{imageUrl && <PokemonImage src={imageUrl} alt={pokemon.name} />}
			<DetailItem>
				<strong>ID:</strong> {pokemon.id}
			</DetailItem>
			<DetailItem>
				<strong>Species:</strong> {pokemon.species.name}
			</DetailItem>
			<DetailItem>
				<strong>Height:</strong> {pokemon.height / 10} m
			</DetailItem>
			<DetailItem>
				<strong>Weight:</strong> {pokemon.weight / 10} kg
			</DetailItem>

			<h2>Stats</h2>
			<StatList>
				{pokemon.stats.map((statItem) => (
					<StatItem key={statItem.stat.name}>
						<span>{statItem.stat.name.replace("-", " ")}:</span>
						<span>{statItem.base_stat}</span>
					</StatItem>
				))}
			</StatList>

			<BackLink href="/">Back to List</BackLink>
		</Container>
	);
}
