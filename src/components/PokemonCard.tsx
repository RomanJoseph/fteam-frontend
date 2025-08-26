"use client";

import React from "react";
import { Card, PokemonImage, PokemonName } from "./style";

interface PokemonCardProps {
	name: string;
	imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
	return (
		<Card href={`/pokemon/${name}`}>
			<PokemonImage src={imageUrl} alt={name} />
			<PokemonName>{name}</PokemonName>
		</Card>
	);
};

export default PokemonCard;
