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

// if logged in show the user link to page write.
import React, { useEffect, useState } from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";
import Nothing from "../components/nothing";
import BlogItem from "../components/blogItem";

import firebase from "firebase/app";
import "firebase/firestore";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get the blogs
    const db = firebase.firestore().collection("blogs");

    db.onSnapshot(snap => {
      let data = [];

      snap.docs.forEach(doc => {
        data = [...data, doc.data()];
      });

      setBlogs(data);
    });
  }, []);

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
          blogs.map(
            ({ title, contentPreview, image, createdAt, content }, index) => (
              <BlogItem
                key={index}
                title={title}
                contentPreview={contentPreview}
                createdAt={createdAt}
                image={image}
                content={content}
              />
            )
          )
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

export default App;
