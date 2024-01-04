import { AppTheme } from "../styles/theme";

type AppTheme = typeof AppTheme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
