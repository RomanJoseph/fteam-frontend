import "styled-components";

import { lightTheme } from "./styles/theme";

type Theme = typeof lightTheme;

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface DefaultTheme extends Theme {}
}
