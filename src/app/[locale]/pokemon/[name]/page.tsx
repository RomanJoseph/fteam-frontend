"use client";

import React from "react";
import { useParams } from "next/navigation";
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
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { useI18n } from "@/i18n/client";

export default function PokemonDetailPage() {
	const params = useParams();
	const pokemonName = params.name as string;
	const i18n = useI18n();
	const { pokemon, loading, error, primaryType } =
		usePokemonDetails(pokemonName);

	if (loading) {
		return <LoadingMessage>{i18n("pokemon.loading")}</LoadingMessage>;
	}

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}

	if (!pokemon) {
		return <ErrorMessage>{i18n("pokemon.error")}</ErrorMessage>;
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
					<strong>{i18n("pokemon.height")}:</strong> {pokemon.height / 10} m
				</DetailItem>
				<DetailItem>
					<strong>{i18n("pokemon.weight")}:</strong> {pokemon.weight / 10} kg
				</DetailItem>
			</DetailsGrid>

			<StatsContainer>
				<h2>{i18n("pokemon.base_stats")}</h2>
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

			<BackLink href="/">{i18n("pokemon.back_to_list")}</BackLink>
		</Container>
	);
}
