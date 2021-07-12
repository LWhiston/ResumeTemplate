import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import { contactInfo, jobs, name, schools, sideProjects, skills } from "./data";
import { Header } from "./components/Header";
import { SectionHeader } from "./components/SectionHeader";
import { Row } from "./components/Row";
import { MainBullet } from "./components/MainBullet";
import { LocationDates } from "./components/LocationDate";
import { SubBullet } from "./components/SubBullet";

const styles = StyleSheet.create({
  page: {
    padding: "0.5in",
    flexDirection: "column",
    display: "flex",
    fontFamily: "Roboto",
  },
});

export const Resume = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header name={name} contactInfo={contactInfo} />
        <SectionHeader title="Education" />
        {schools.map(({ name, info, location, dates }) => (
          <Row>
            <MainBullet primary={name} secondary={info} />
            <LocationDates location={location} dates={dates} />
          </Row>
        ))}
        <SectionHeader title={"Experience"} />
        {jobs.map(({ companyName, title, location, dates, bulletPoints }) => (
          <View style={{ marginBottom: "0.0625in" }}>
            <Row>
              <MainBullet primary={companyName} secondary={title} />
              <LocationDates location={location} dates={dates} />
            </Row>
            {bulletPoints.map((bulletPoint) => (
              <SubBullet text={bulletPoint} />
            ))}
          </View>
        ))}
        <SectionHeader title={"Side Projects"} />
        {sideProjects.map(({ name, bulletPoints }) => (
          <View style={{ marginBottom: "0.0625in" }}>
            <MainBullet primary={name} />
            {bulletPoints.map((bulletPoint) => (
              <SubBullet text={bulletPoint} />
            ))}
          </View>
        ))}
        <SectionHeader title={"Programming Skills"} />
        {skills.map(({ name, skills }) => (
          <View style={{ marginBottom: "4pt" }}>
            <MainBullet
              primary={`${name}: ${skills.join(", ")}`}
              primaryBold={false}
            />
          </View>
        ))}
      </Page>
    </Document>
  );
};
