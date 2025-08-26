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
	Title,
	DetailsGrid,
	TypesContainer,
	TypeBadge,
	StatsContainer,
	StatItem,
	StatInfo,
	StatBarBackground,
	StatBarFill,
} from "./style";

export default function PokemonDetailPage() {
	const params = useParams();
	const pokemonName = params.name as string;
	// Agora pegamos primaryType do hook
	const { pokemon, loading, error, primaryType } =
		usePokemonDetails(pokemonName);

	if (loading) {
		return <LoadingMessage>Carregando detalhes do Pokémon...</LoadingMessage>;
	}

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}

	if (!pokemon) {
		return <ErrorMessage>Pokémon não encontrado.</ErrorMessage>;
	}

	const imageUrl =
		pokemon.sprites.other?.["official-artwork"]?.front_default ||
		pokemon.sprites.front_default;

	return (
		<Container pokemonType={primaryType}>
			<Title>
				#{String(pokemon.id).padStart(3, "0")} - {pokemon.name}
			</Title>

			<TypesContainer>
				{pokemon.types.map((typeInfo) => (
					<TypeBadge key={typeInfo.type.name} pokemonType={typeInfo.type.name}>
						{typeInfo.type.name}
					</TypeBadge>
				))}
			</TypesContainer>

			{imageUrl && <PokemonImage src={imageUrl} alt={pokemon.name} />}

			<DetailsGrid>
				<DetailItem>
					<strong>Height:</strong> {pokemon.height / 10} m
				</DetailItem>
				<DetailItem>
					<strong>Weight:</strong> {pokemon.weight / 10} kg
				</DetailItem>
			</DetailsGrid>

			<StatsContainer>
				<h2>Base Stats</h2>
				{pokemon.stats.map((statItem) => (
					<StatItem key={statItem.stat.name}>
						<StatInfo>
							<span>{statItem.stat.name.replace("-", " ")}</span>
							<strong>{statItem.base_stat}</strong>
						</StatInfo>
						<StatBarBackground>
							<StatBarFill
								statValue={statItem.base_stat}
								pokemonType={primaryType}
							/>
						</StatBarBackground>
					</StatItem>
				))}
			</StatsContainer>

			<BackLink href="/">Voltar para a Lista</BackLink>
		</Container>
	);
}
