import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";

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

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={locale} className={`${roboto.variable} ${poppins.variable}`}>
			<body>
				<Providers locale={locale}>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
