import Link from "next/link";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
	background-color: ${({ theme }) => theme.colors.surface};
	padding: 0 ${({ theme }) => theme.spacing.large};
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.shadows.small};
	position: sticky;
	top: 0;
	z-index: 10;
`;

export const Title = styled(Link)`
	font-size: ${({ theme }) => theme.fontSizes.large};
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.fonts.heading};
	text-transform: uppercase;
	letter-spacing: 1.5px;
	text-decoration: none;
`;

export const ControlsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.medium};
`;

export const LocaleSwitcherContainer = styled.div`
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
		background-color: ${({ theme, isActive }) =>
			!isActive && "rgba(204, 0, 0, 0.1)"};
		transform: translateY(-2px);
	}
`;

export const ThemeToggleButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border-radius: 50%;
	transition: color 0.2s, background-color 0.2s;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.background};
	}
`;
