"use client";

import { CustomThemeProvider } from "@/context/ThemeContext";
import { I18nProviderClient } from "@/i18n/client";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { useParams } from "next/navigation";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const { locale } = useParams();

	return (
		<I18nProviderClient locale={(locale as string) ?? "pt"}>
			<StyledComponentsRegistry>
				<CustomThemeProvider>
					<GlobalStyles />
					{children}
				</CustomThemeProvider>
			</StyledComponentsRegistry>
		</I18nProviderClient>
	);
};
