import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="page secondary-page my-3">
      <Container className="">
        <h2>About</h2>
        <p>
          Founded in Draper Utah, a group of people, who all happened to have
          the same last name, decided that they wanted to use their coding
          skills to build websites. After a couple years of studying, they
          purchased this domain and went with it. Then they hopefully got lots
          of freelance work and could help lots of people in making amazing
          websites to help with their business/blog or other needs, but that
          part is up to you. Let us help you make a great website for you today!
        </p>
        <p>
          If you want to give us a shoutout or contact us, please do on our{" "}
          <a href="/contact">contact page.</a> We look forward to hearing from
          you.
        </p>
      </Container>
    </div>
  );
};

export default About;
