"use client";

import { lightTheme, darkTheme } from "@/styles/theme";
import React, {
	createContext,
	useState,
	useMemo,
	useContext,
	useEffect,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
	themeMode: ThemeMode;
	toggleThemeMode: () => void;
	isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
	themeMode: "light",
	toggleThemeMode: () => {},
	isMounted: false,
});

export const CustomThemeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [themeMode, setThemeMode] = useState<ThemeMode>("light");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const savedTheme = window.localStorage.getItem("themeMode") as ThemeMode;
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme) {
			setThemeMode(savedTheme);
		} else if (systemPrefersDark) {
			setThemeMode("dark");
		}
	}, []);

	const toggleThemeMode = () => {
		setThemeMode((prevMode) => {
			const newMode = prevMode === "light" ? "dark" : "light";
			window.localStorage.setItem("themeMode", newMode);
			return newMode;
		});
	};

	const theme = useMemo(
		() => (themeMode === "light" ? lightTheme : darkTheme),
		[themeMode]
	);

	const contextValue = useMemo(
		() => ({ themeMode, toggleThemeMode, isMounted }),
		[themeMode, isMounted]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
