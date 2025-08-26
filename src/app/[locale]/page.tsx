"use client";

import React, { useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import { useDebounce } from "../../hooks/useDebounce";
import PokemonCard from "../../components/PokemonCard";
import {
	LoadingMessage,
	ErrorMessage,
	Container,
	Title,
	SearchInput,
	PokemonGrid,
	PaginationControls,
	Button,
	InfoMessage,
} from "./style";
import { useI18n } from "../../i18n/client";

const PAGE_SIZE = 20;

export default function HomePage() {
	const [offset, setOffset] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const i18n = useI18n();

	const { pokemons, loading, error, totalCount } = usePokemons(
		PAGE_SIZE,
		offset,
		debouncedSearchTerm
	);

	const handleNextPage = () => {
		setOffset((prevOffset) => prevOffset + PAGE_SIZE);
	};

	const handlePrevPage = () => {
		setOffset((prevOffset) => Math.max(0, prevOffset - PAGE_SIZE));
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		setOffset(0);
	};

	if (loading) {
		return <LoadingMessage>Loading Pokemons...</LoadingMessage>;
	}

	if (error) {
		return <ErrorMessage>{error}</ErrorMessage>;
	}

	return (
		<Container>
			<Title>{i18n("home.title")}</Title>
			<SearchInput
				type="text"
				placeholder={i18n("home.search")}
				value={searchTerm}
				onChange={handleSearchChange}
			/>
			<PokemonGrid>
				{pokemons.length > 0 ? (
					pokemons.map((pokemon) => {
						const id = pokemon.url.split("/").filter(Boolean).pop();
						const imageUrl = `${process.env.NEXT_PUBLIC_POKEMON_SPRITE_BASE_URL}${id}.png`;
						return (
							<PokemonCard
								key={pokemon.name}
								name={pokemon.name}
								imageUrl={imageUrl}
							/>
						);
					})
				) : (
					<InfoMessage>
						<p>{i18n("home.not_found")}</p>
					</InfoMessage>
				)}
			</PokemonGrid>
			<PaginationControls>
				<Button onClick={handlePrevPage} disabled={offset === 0}>
					Previous
				</Button>
				<Button
					onClick={handleNextPage}
					disabled={offset + PAGE_SIZE >= totalCount}
				>
					Next
				</Button>
			</PaginationControls>
		</Container>
	);
}
