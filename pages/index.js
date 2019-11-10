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
import Nothing from "../components/nothing";
import BlogItem from "../components/blogItem";

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
            <BlogItem
              key={index}
              title={title}
              extrait={extrait}
              createdAt={createdAt}
              image={image}
            />
          ))
        ) : (
          <Nothing />
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
        `}
      </style>
    </Container>
  );
}

// sample array of random blogs
// const blogs = null;
const blogs = [
  {
    title: "Reading Nothing To Something Everyday",
    extrait:
      "I went from reading nothing to reading something every day. The result was surprising.",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  },
  {
    title: "How to implement dark mode in React Native",
    extrait: "Are you ready to join the dark side?⚫️",
    image: null,
    createdAt: "Jun 18"
  }
];

export default App;
