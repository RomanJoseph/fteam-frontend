"use client";

import { CustomThemeProvider } from "@/context/ThemeContext";
import { I18nProviderClient } from "@/i18n/client";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import React from "react";

export const Providers = ({
	children,
	locale,
}: {
	children: React.ReactNode;
	locale: string;
}) => {
	return (
		<I18nProviderClient locale={locale}>
			<StyledComponentsRegistry>
				<CustomThemeProvider>
					<GlobalStyles />
					{children}
				</CustomThemeProvider>
			</StyledComponentsRegistry>
		</I18nProviderClient>
	);
};
