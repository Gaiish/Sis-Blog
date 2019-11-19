// TODO: read blog page
// title of blog en grand
// display blog content

// content preview will need to be transformed from html string to pure string

import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

function Read() {
  const router = useRouter();

  return (
    <Container>
      {/* blog content */}
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <div
            className="main-wrapper"
            dangerouslySetInnerHTML={{ __html: router.query.content }}
          />
        </Col>
      </Row>

      <style jsx>
        {`
          .blog-title {
            display: flex;
            justify-content: center;
            margin: 50px 0 25px 0;
          }

          .main-wrapper h1 {
            font-weight: 400;
            font-family: "Times New Roman", serif;
          }
          .main-wrapper {
            margin-top: 20px;
          }
          .main-wrapper p {
            font-size: 21px;
            font-weight: 400;
            line-height: 1.58;
            letter-spacing: -0.004em;
            font-family: "Times New Roman", serif;
          }
        `}
      </style>
    </Container>
  );
}

export default Read;
