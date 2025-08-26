const baseTheme = {
	fonts: {
		body: "var(--font-roboto), sans-serif",
		heading: "var(--font-poppins), sans-serif",
	},
	fontSizes: {
		small: "0.8rem",
		medium: "1rem",
		large: "1.5rem",
		xlarge: "2.5rem",
	},
	spacing: {
		small: "8px",
		medium: "16px",
		large: "24px",
	},
	shadows: {
		small: "0 2px 4px rgba(0, 0, 0, 0.1)",
		medium: "0 4px 8px rgba(0, 0, 0, 0.15)",
	},
	borderRadius: "8px",
	typeColors: {
		normal: "#A8A77A",
		fire: "#EE8130",
		water: "#6390F0",
		electric: "#F7D02C",
		grass: "#7AC74C",
		ice: "#96D9D6",
		fighting: "#C22E28",
		poison: "#A33EA1",
		ground: "#E2BF65",
		flying: "#A98FF3",
		psychic: "#F95587",
		bug: "#A6B91A",
		rock: "#B6A136",
		ghost: "#735797",
		dragon: "#6F35FC",
		dark: "#705746",
		steel: "#B7B7CE",
		fairy: "#D685AD",
	},
};

export const lightTheme = {
	...baseTheme,
	colors: {
		primary: "#CC0000",
		secondary: "#D2B48C",
		accent: "#FFDE00",
		background: "#F0F0F0",
		surface: "#FFFFFF",
		text: "#333333",
		white: "#FFFFFF",
		lightGrey: "#E0E0E0",
		darkGrey: "#555555",
	},
};

export const darkTheme = {
	...baseTheme,
	colors: {
		primary: "#FF6B6B",
		secondary: "#D2B48C",
		accent: "#FFDE00",
		background: "#121212",
		surface: "#1E1E1E",
		text: "#E0E0E0",
		white: "#FFFFFF",
		lightGrey: "#333333",
		darkGrey: "#A0A0A0",
	},
};
