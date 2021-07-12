import { View, Text } from "@react-pdf/renderer";
import { Row } from "./Row";

type Props = {
  name: string;
  contactInfo: string[];
};

export const Header = ({ name, contactInfo }: Props) => (
  <Row>
    <View style={{ fontSize: "16px", fontStyle: "bold" }}>
      <Text>{name}</Text>
    </View>
    <View
      style={{
        textAlign: "right",
        fontSize: "12px",
        flexGrow: 1,
      }}
    >
      {contactInfo.map((contactLine) => (
        <Text>{contactLine}</Text>
      ))}
    </View>
  </Row>
);
