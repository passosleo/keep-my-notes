import "styled-components";
import { theme } from "../theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

export type Note = {
  id: string;
  title: string;
  description?: string;
  color?: string;
  updatedAt: string;
};

export type Profile = {
  photo: string;
  name: string;
};

export type ProfileContextType = {
  profile: Profile;
  handleUpdateProfile: (profile: Profile) => void;
};
