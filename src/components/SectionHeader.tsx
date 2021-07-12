import { Text } from "@react-pdf/renderer";

type Props = {
  title: string;
};

export const SectionHeader = ({ title }: Props) => (
  <Text
    style={{
      fontSize: "12px",
      borderBottom: "1px",
      marginTop: "0.125in",
      marginBottom: "0.0625in",
      textTransform: "uppercase",
    }}
  >
    {title}
  </Text>
);
