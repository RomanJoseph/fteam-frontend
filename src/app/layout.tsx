import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Pokédex",
	description:
		"A simple Pokemon application built with Next.js and Styled-Components.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
