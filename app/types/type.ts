import { IconType } from "react-icons";

export type NavIcon = {
  id: number;
  item: string;
  icon: IconType;
};

export type Tooltype = {
  id: number;
  name: string;
  isNew: boolean;
  description: string;
  icon: IconType;
  bgColor: string;
};
