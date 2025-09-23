import { FaFile, FaHome, FaImage, FaVideo } from "react-icons/fa";
import {
  FaHouseChimneyCrack,
  FaPenNib,
  FaPhotoFilm,
  FaTowerBroadcast,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import type { Tooltype } from "../types/type";

const Tools: Tooltype[] = [
  {
    id: 1,
    name: "image",
    isNew: true,
    description: "Upload, edit, and enhance image files.",
    icon: FaPhotoFilm,
    bgColor: "bg-gray-400",
  },
  {
    id: 2,
    name: "video",
    isNew: false,
    description: "Create, trim, and manage video content.",
    icon: FaVideo,
    bgColor: "bg-blue-400",
  },
  {
    id: 3,
    name: "edit",
    isNew: true,
    description: "Customize media with advanced editing tools.",
    icon: FaPhotoFilm,
    bgColor: "bg-violet-400",
  },
  {
    id: 4,
    name: "video lipsync",
    isNew: true,
    description: "Sync spoken audio with video lips automatically.",
    icon: FaPhotoFilm,
    bgColor: "bg-yellow-400",
  },
  {
    id: 5,
    name: "realtime",
    isNew: false,
    description: "Process tasks instantly with live feedback.",
    icon: FaPenNib,
    bgColor: "bg-fuchsia-400",
  },
  {
    id: 6,
    name: "motion transfer",
    isNew: true,
    description: "Apply movements from one source to another.",
    icon: FaHouseChimneyCrack,
    bgColor: "bg-gray-900",
  },
  {
    id: 7,
    name: "enhancer",
    isNew: true,
    description: "Boost media quality with smart AI enhancements.",
    icon: FaWandMagicSparkles,
    bgColor: "bg-black",
  },
  {
    id: 8,
    name: "train",
    isNew: false,
    description: "Train AI models with your unique data.",
    icon: FaPhotoFilm,
    bgColor: "bg-green-300",
  },
];

export default Tools;
