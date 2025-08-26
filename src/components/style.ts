import Link from "next/link";
import styled from "styled-components";

export const Card = styled(Link)`
	background-color: ${({ theme }) => theme.colors.surface};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.small};
	padding: ${({ theme }) => theme.spacing.medium};
	text-align: center;
	transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: translateY(-5px);
		box-shadow: ${({ theme }) => theme.shadows.medium};
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const PokemonImage = styled.img`
	width: 120px;
	height: 120px;
	margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const PokemonName = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.medium};
	color: ${({ theme }) => theme.colors.text};
	text-transform: capitalize;
	margin: 0;
`;
