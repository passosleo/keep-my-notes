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
};

export type ProfileContextType = {
  profile: Profile;
  handleUpdateProfile: ({ name, photo }: Profile) => void;
};

export type Profile = {
  photo: string;
  name: string;
};
