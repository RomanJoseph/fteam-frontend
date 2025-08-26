"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "styled-components";
import { ThemeToggleButton } from "../Header/style";

const ThemeSwitcher = () => {
	const { themeMode, toggleThemeMode } = useTheme();

	return (
		<ThemeToggleButton onClick={toggleThemeMode} aria-label="Toggle theme">
			{themeMode === "light" ? <FaMoon /> : <FaSun />}
		</ThemeToggleButton>
	);
};

export default ThemeSwitcher;
