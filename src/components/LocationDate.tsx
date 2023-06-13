import { View, Text } from "@react-pdf/renderer";

type Props = {
  location: string;
  dates: string;
};

export const LocationDates = ({ location, dates }: Props) => (
  <View
    style={{
      textAlign: "right",
      fontSize: "12px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    }}
  >
    <Text>{location}</Text>
    <Text style={{ fontFamily: "Times-Italic" }}>{dates}</Text>
  </View>
);
