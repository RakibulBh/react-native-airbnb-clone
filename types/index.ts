import { Icon as LucideIcon } from "lucide-react-native";
import { ImageSourcePropType } from "react-native";

export interface Category {
  label: string;
}

export type Airbnb = {
  images: ImageSourcePropType[] | undefined[];
  location: string;
  host: string;
  dates: string;
  price: number;
  rating: number;
};
