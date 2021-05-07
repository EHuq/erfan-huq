import React from "react";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Work from "../components/Work";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contacts from "../pages/Contacts"

function Home(props) {
  return (
    <div

      style={{
        minHeight: "calc(100vh - 162px)",
      }}
    >
      <Summary
        className="mainPage"
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        links={true}
      />
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
      <Contacts />
    </div>
  );
}

export default Home;
