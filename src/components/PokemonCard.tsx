"use client";

import React from "react";
import { Card, PokemonImage, PokemonName } from "./style";
import { useCurrentLocale } from "@/i18n/client";

interface PokemonCardProps {
	name: string;
	imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
	const currentLocale = useCurrentLocale();

	return (
		<Card href={`${currentLocale}/pokemon/${name}`}>
			<PokemonImage src={imageUrl} alt={name} />
			<PokemonName>{name}</PokemonName>
		</Card>
	);
};

export default PokemonCard;
