import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
	padding: 2rem;
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
`;

export const Title = styled.h1`
	text-transform: capitalize;
	color: #333;
	margin-bottom: 1rem;
`;

export const PokemonImage = styled.img`
	width: 200px;
	height: 200px;
	margin-bottom: 1rem;
`;

export const DetailItem = styled.p`
	font-size: 1.1rem;
	margin: 0.5rem 0;
`;

export const StatList = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 1rem;
`;

export const StatItem = styled.li`
	background-color: #f0f0f0;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BackLink = styled(Link)`
	display: inline-block;
	margin-top: 2rem;
	padding: 0.8rem 1.5rem;
	background-color: #0070f3;
	color: white;
	text-decoration: none;
	border-radius: 5px;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: #005bb5;
	}
`;

export const ErrorMessage = styled.p`
	color: red;
	text-align: center;
`;

export const LoadingMessage = styled.p`
	text-align: center;
`;
