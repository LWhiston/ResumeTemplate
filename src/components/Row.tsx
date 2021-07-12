import { View } from "@react-pdf/renderer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Row = ({ children }: Props) => (
  <View style={{ display: "flex", flexDirection: "row" }}>{children}</View>
);
