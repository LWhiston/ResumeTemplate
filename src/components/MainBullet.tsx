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
      style={{
        fontSize: "12px",
        fontFamily: primaryBold ? "Times-Bold" : undefined,
      }}
    >
      {primary}
    </Text>
    <Text style={{ fontSize: "12px", fontFamily: "Times-Italic" }}>
      {secondary}
    </Text>
  </View>
);
