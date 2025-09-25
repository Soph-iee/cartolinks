import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
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

export type ImagesType = {
  id: number;
  main: string;
  heading: string;
  description: string;
  Leftimg: StaticImageData;
  Rightimg: StaticImageData;
  rightHeading:string
};

export type ImageContainerProps = {
  Images: ImagesType[];
  activeImage: number;
  setActiveImage: Dispatch<SetStateAction<number>>;
};
