import { Text } from "@react-pdf/renderer";
type Props = {
  text: string;
};

export const SubBullet = ({ text }: Props) => (
  <Text
    style={{
      marginLeft: "0.375in",
      marginTop: "2pt",
      marginBottom: "2pt",
      fontSize: "12px",
    }}
  >{`- ${text}`}</Text>
);
