import React from "react";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function Home(props) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 162px)",
      }}
    >
      <Summary
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        links={true}
      />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
