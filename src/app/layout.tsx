import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
	title: "Pokemon App",
	description:
		"A simple Pokemon application built with Next.js and Styled-Components.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
