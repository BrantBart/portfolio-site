import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import MeImage from "../assets/me.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "../components/Carousel";

// const Portfolio = () => {
//   return (
//     <div class="secondary-page page my-3">
//       <Container className="secondary-page">
//         <h2>Welcome to My Portfolio</h2>
//         <Row>
//           <Col classname="col-8">
//             <div className="container p-3">
//               <h3 class="">About Me</h3>
//               <p>
//                 I am a web developer always trying to learn new things and
//                 improve myself. I have always loved technology and video games
//                 have been a big help in making technology friendly and
//                 approachable. Some of the first games I remember playing were{" "}
//                 <a
//                   href="https://www.youtube.com/watch?v=_TKiRvGfw3Q"
//                   target="_blank"
//                 >
//                   Asteroids
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   href="https://www.youtube.com/watch?v=Ctr54kopo8I"
//                   target="_blank"
//                 >
//                   Battlezone
//                 </a>
//                 . These simple games made technology fun and interactive. Later
//                 I was introduced to games like Sid Meier's Civilization.
//                 Understanding this genera of games lets you learn and play a
//                 game at the same time. I still remember drawing a map of the
//                 world in school and my teacher was stunned because I had learned
//                 it from a computer game.
//               </p>
//             </div>
//           </Col>
//           <Col classname="col-lg-4">
//             <img
//               className="mx-auto imghome"
//               src={MeImage}
//               loading="lazy"
//               alt="Me"
//             />
//           </Col>
//         </Row>

//         {/* <MeImage /> */}
//         <p>
//           Now I have experience programming in a couple of my favorite games
//           using cdks and other tools, but web development has become my main
//           focus. And it is just so fun!
//         </p>

//         <p>
//           Making technology easier to use and approachable is the best way to
//           utilize the resources used in web development because if your
//           customers cannot understand the technology, why would they keep using
//           it?
//         </p>

//         <p>
//           As I overhaul this website and portfolio, I'm loving every bit of new
//           technology I have been using. This website was built using PHP
//           primarily in the past, but now I am working with React and SCSS
//           preprocessers to utilize the tools I am more familiar with now. Here I
//           will be able to show off and experiment with other projects as well
//           and I'm looking forward to it!
//         </p>
//         <h3 class="">Websites Developed</h3>
//         <ul>
//           <li>
//             <a href="http://www.granddesignrv.com">granddesignrv.com</a>
//           </li>
//           <li>
//             <a href="http://www.ihg.com">ihg.com</a>
//           </li>
//           <li>
//             <a href="http://www.characterbooking.com">characterbooking.com</a>
//           </li>
//           <li>
//             <a href="http://www.meadowsmd.com">meadowsmd.com</a>
//           </li>
//           <li>
//             <a href="https://saltstate.com/">saltstate.com</a>
//           </li>
//         </ul>
//       </Container>
//     </div>
//   );
// };





const Portfolio = () => {
  return (
    <div className="secondary-page page my-3">
      <Carousel />
    </div>
  );
};

export default Portfolio;