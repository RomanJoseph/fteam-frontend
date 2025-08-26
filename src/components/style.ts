import Link from "next/link";
import styled from "styled-components";

export const Card = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 8px;
	text-decoration: none;
	color: inherit;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-5px);
	}
`;

export const PokemonImage = styled.img`
	width: 96px;
	height: 96px;
	margin-bottom: 0.5rem;
`;

export const PokemonName = styled.h3`
	margin: 0;
	text-transform: capitalize;
`;
