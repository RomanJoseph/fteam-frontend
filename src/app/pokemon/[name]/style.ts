import { Theme } from "@/styled";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div<{ pokemonType: string }>`
	padding: ${({ theme }) => theme.spacing.large};
	max-width: 600px;
	margin: 2rem auto;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: ${({ theme }) => theme.shadows.medium};
	border-top: 10px solid
		${({ theme, pokemonType }) =>
			(pokemonType as keyof Theme["typeColors"]) || theme.colors.darkGrey};
	text-align: center;
`;

export const Title = styled.h1`
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.text};
	font-size: ${({ theme }) => theme.fontSizes.xlarge};
	margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const PokemonImage = styled.img`
	width: 200px;
	height: 200px;
	margin-bottom: 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 50%;
	padding: ${({ theme }) => theme.spacing.small};
`;

export const DetailsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${({ theme }) => theme.spacing.medium};
	margin: ${({ theme }) => theme.spacing.large} 0;
	text-align: left;
`;

export const DetailItem = styled.div`
	font-size: 1.1rem;
	background-color: ${({ theme }) => theme.colors.background};
	padding: ${({ theme }) => theme.spacing.small}
		${({ theme }) => theme.spacing.medium};
	border-radius: ${({ theme }) => theme.borderRadius};
	strong {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

export const TypesContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing.small};
	margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const TypeBadge = styled.span<{ pokemonType: string }>`
	padding: 5px 15px;
	border-radius: 15px;
	background-color: ${({ theme, pokemonType }) =>
		theme.typeColors[pokemonType as keyof Theme["typeColors"]] ||
		theme.colors.darkGrey};
	color: ${({ theme }) => theme.colors.white};
	text-transform: capitalize;
	font-weight: bold;
`;

export const StatsContainer = styled.div`
	margin-top: ${({ theme }) => theme.spacing.large};
	text-align: left;

	h2 {
		text-align: center;
		margin-bottom: ${({ theme }) => theme.spacing.medium};
	}
`;

export const StatItem = styled.div`
	margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const StatInfo = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
	text-transform: capitalize;
`;

export const StatBarBackground = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	border-radius: 5px;
	height: 20px;
	overflow: hidden;
`;

export const StatBarFill = styled.div<{
	statValue: number;
	pokemonType: string;
}>`
	height: 100%;
	width: ${({ statValue }) => (statValue / 255) * 100}%;
	background-color: ${({ theme, pokemonType }) =>
		theme.typeColors[pokemonType as keyof Theme["typeColors"]] ||
		theme.colors.primary};
	border-radius: 5px;
	transition: width 0.5s ease-in-out;
`;

export const BackLink = styled(Link)`
	display: inline-block;
	margin-top: ${({ theme }) => theme.spacing.large};
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: background-color 0.2s ease-in-out, transform 0.1s ease;
	font-weight: bold;

	&:hover {
		background-color: #2a3d99; // Um azul mais escuro
		transform: scale(1.05);
	}
`;

export const ErrorMessage = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
`;

export const LoadingMessage = styled.p`
	text-align: center;
`;
