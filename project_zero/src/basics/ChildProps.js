import React from "react";

function ChildProps() {
  const Paragraph = (props) => <p>{props.text}</p>;
  const Section = ({ headingText, children }) => (
    <section>
      <h1>{headingText}</h1>
      {children}
    </section>
  );
  const SectionBlock = (_) => (
    <Section headingText="This is My Section">
      <Paragraph text="Sekai ni Itami o - Shinar aten" />
      <Paragraph text="This World Shall Know Pain" />
    </Section>
  );
  return (
    <React.Fragment>
      <SectionBlock />
    </React.Fragment>
  );
}

export default ChildProps;
