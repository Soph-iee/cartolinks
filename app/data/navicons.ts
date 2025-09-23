import { FaFile, FaHome, FaImage, FaVideo } from "react-icons/fa";
import {
  FaPenNib,
  FaTowerBroadcast,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import type { NavIcon } from "../types/type";
const NavIcons: NavIcon[] = [
  { item: "home", icon: FaHome, id: 1 },
  { item: "image", icon: FaImage, id: 2 },
  { item: "video", icon: FaVideo, id: 3 },
  { item: "enhancer", icon: FaPenNib, id: 4 },
  { item: "realtime", icon: FaWandMagicSparkles, id: 5 },
  { item: "edit", icon: FaTowerBroadcast, id: 6 },
  { item: "assets", icon: FaFile, id: 7 },
];

export default NavIcons;
