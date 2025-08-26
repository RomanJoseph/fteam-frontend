// src/components/Header/Header.tsx
"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useI18n, useCurrentLocale } from "../../i18n/client";
import { FaSun, FaMoon } from "react-icons/fa";
import {
	HeaderWrapper,
	Title,
	ControlsWrapper,
	LocaleSwitcherContainer,
	LocaleButton,
	ThemeToggleButton,
} from "./style";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
	const { themeMode, toggleThemeMode, isMounted } = useTheme();
	const i18n = useI18n();
	const currentLocale = useCurrentLocale();
	const router = useRouter();
	const pathname = usePathname();

	const handleChangeLocale = (newLocale: "en" | "pt") => {
		const segments = pathname.split("/");
		segments[1] = newLocale;
		const newPath = segments.join("/");

		router.push(newPath);
	};

	return (
		<HeaderWrapper>
			<Title href="/">{i18n("header.title")}</Title>
			<ControlsWrapper>
				<LocaleSwitcherContainer>
					<LocaleButton
						onClick={() => handleChangeLocale("en")}
						isActive={currentLocale === "en"}
					>
						EN
					</LocaleButton>
					<LocaleButton
						onClick={() => handleChangeLocale("pt")}
						isActive={currentLocale === "pt"}
					>
						PT
					</LocaleButton>
				</LocaleSwitcherContainer>

				{isMounted && (
					<ThemeToggleButton
						onClick={toggleThemeMode}
						aria-label="Toggle theme"
					>
						{themeMode === "light" ? <FaMoon /> : <FaSun />}
					</ThemeToggleButton>
				)}
			</ControlsWrapper>
		</HeaderWrapper>
	);
};

export default Header;
