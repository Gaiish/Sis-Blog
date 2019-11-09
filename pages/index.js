// Main page
//
// it will have
// a welcome title
// a list of articles or a nothing yet giant title
/* the articles will have:
 * a title
 * an extrait of the first few words starting the article
 * an image
 * a date of creation of the article || blog
 * good readable font is key
 */

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="welcome">
        {/* Welcome title */}
        <h1>Welcome to my blog ✍🏾✍🏾✍🏾😎✌️.</h1>
        {/* end: Welcome title */}
      </div>
      {/* body */}
      <Row>
        {/* list of blogs if there are some. */}
        {blogs ? (
          blogs.map(({ title, extrait, image, createdAt }, index) => (
            <Col md="4" sm="12" key={index}>
              <h3>{title}</h3>
              <p>{extrait}</p>
              <h6>{createdAt}</h6>
            </Col>
          ))
        ) : (
          <Col xs={{ span: 12 }}>
            <div className="nothing">
              <h3>👋 Hi, nothing yet, adding my first blog soon 🚀.</h3>
              <h1>💃🏽</h1>
            </div>
          </Col>
        )}
      </Row>
      {/* body */}

      <style jsx>
        {`
          .welcome {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0 20px 0;
          }
          .nothing {
            margin-top: 90px;
          }
          .nothing h3 {
            font-weight: 200;
            text-align: center;
          }
          .nothing h1 {
            text-align: center;
            margin-top: 50px;
            font-size: 150px;
          }
        `}
      </style>
    </Container>
  );
}

// sample array of random blogs
const blogs = null;
// const blogs = [
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   },
//   {
//     title: "How to implement dark mode in React Native",
//     extrait: "Are you ready to join the dark side?⚫️",
//     image: null,
//     createdAt: "Jun 18"
//   }
// ];

export default App;
