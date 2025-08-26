import { styled } from "styled-components";

export const Container = styled.div`
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	text-align: center;
	color: #333;
	margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 0.8rem;
	margin-bottom: 2rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 1rem;
`;

export const PokemonGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1rem;
	justify-content: center;
`;

export const PaginationControls = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 2rem;
`;

export const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: #0070f3;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.2s ease-in-out;

	&:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
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
