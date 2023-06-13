import { Text, View } from "@react-pdf/renderer";
type Props = {
  text: string;
};

export const SubBullet = ({ text }: Props) => (
  <View style={{ display: "flex", flexDirection: "row", gap: "2pt" }}>
    <Text
      style={{
        marginLeft: "0.375in",
        marginTop: "2pt",
        marginBottom: "2pt",
        fontSize: "12px",
      }}
    >{`-`}</Text>
    <Text
      style={{
        flexGrow: 1,
        paddingRight: "1.25in",
        marginTop: "2pt",
        marginBottom: "2pt",
        fontSize: "12px",
      }}
    >
      {text}
    </Text>
  </View>
);
