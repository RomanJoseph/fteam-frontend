import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import { getCurrentLocale } from "@/i18n/server";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Pokédex",
	description:
		"A simple Pokemon application built with Next.js and Styled-Components.",
};

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	const lang = await getCurrentLocale();

	return (
		<html lang={lang} className={`${roboto.variable} ${poppins.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
