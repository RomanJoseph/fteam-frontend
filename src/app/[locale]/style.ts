import { styled } from "styled-components";

export const Container = styled.main`
	padding: ${({ theme }) => theme.spacing.large};
	max-width: 1200px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.fontSizes.xlarge};
	margin-bottom: ${({ theme }) => theme.spacing.large};
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 12px 16px;
	margin-bottom: ${({ theme }) => theme.spacing.large};
	border: 2px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	transition: border-color 0.2s;

	&:focus {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const PokemonGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: ${({ theme }) => theme.spacing.large};
`;

export const PaginationControls = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.medium};
	margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;
	transition: background-color 0.2s ease-in-out, transform 0.1s ease;

	&:disabled {
		background-color: ${({ theme }) => theme.colors.lightGrey};
		color: ${({ theme }) => theme.colors.darkGrey};
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
		background-color: #a80000;
		transform: scale(1.05);
	}

	&:active:not(:disabled) {
		transform: scale(0.95);
	}
`;

export const ErrorMessage = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const LoadingMessage = styled.p`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.large};
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const InfoMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: 1 / -1;

	p {
		text-align: center;
		color: ${({ theme }) => theme.colors.darkGrey};
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}
`;

export const LocaleSwitcherContainer = styled.div`
	position: absolute;
	top: ${({ theme }) => theme.spacing.medium};
	right: ${({ theme }) => theme.spacing.large};
	display: flex;
	gap: ${({ theme }) => theme.spacing.small};
`;

export const LocaleButton = styled.button<{ isActive: boolean }>`
	padding: 8px 12px;
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	font-weight: bold;
	font-size: 0.9rem;
	transition: all 0.2s ease-in-out;

	background-color: ${({ theme, isActive }) =>
		isActive ? theme.colors.primary : "transparent"};
	color: ${({ theme, isActive }) =>
		isActive ? theme.colors.white : theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};

	&:hover:not(:disabled) {
		background-color: ${({ isActive }) => !isActive && "rgba(204, 0, 0, 0.1)"};
		transform: translateY(-2px);
	}
`;
