import { View, Text } from "@react-pdf/renderer";

type Props = {
  primary: string;
  secondary?: string;
  primaryBold?: boolean;
};

export const MainBullet = ({
  primary,
  secondary,
  primaryBold = true,
}: Props) => (
  <View style={{ marginLeft: "0.125in" }}>
    <Text
      style={{ fontSize: "12px", fontStyle: primaryBold ? "bold" : undefined }}
    >
      {primary}
    </Text>
    <Text style={{ fontSize: "12px", fontStyle: "italic" }}>{secondary}</Text>
  </View>
);
