// TODO: read blog page
// title of blog en grand
// display blog content

import { Container, Row, Col } from "react-bootstrap";

function Read() {
  return (
    <Container>
      <div className="blog-title">
        <h1>Reading Nothing To Something Everyday</h1>
      </div>

      {/* blog content */}
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <p>
            I went from reading nothing to reading something every day. The
            result was surprising. I finished 23 books in a year (maybe a few
            more if you include daily articles). And I learned more about the
            world through reading than I did through school.
          </p>
          <p>
            My parents aren’t bibliophiles. They read out of necessity, not
            pleasure (so it seemed). Reading is valuable because that’s how you
            learn, they would say. Learning is crucial in life.
          </p>
          <p>
            I completely agree with this statement today. But my teenage self
            couldn’t have cared less about reading — learning meant school.
            School required work. Work is not fun. Therefore, reading was not
            fun. Anything not fun was disregarded.
          </p>
          <p>
            I read the bare minimum — summer reading lists, school assignments,
            and occasional books that my parents gifted me. I read out of
            obligation, not out of pleasure. Every page turn felt like
            swallowing medicine that wouldn’t stay down. It wasn’t fun, but it
            had to be done.
          </p>
          <p>
            This perception, that reading was a burdensome obligation, remained
            throughout my academic life.
          </p>
          <p>
            When I graduated college, I thought I was finally free from essays,
            exams, presentations, and especially reading.
          </p>
          <p>
            Spoiler alert: none of these go away. Essays evolve into memos and
            emails. Professional licenses conduct exams. Presentations take the
            form of meetings. And reading, if anything, is a staple to growing
            in life.
          </p>
          <p>
            Ironically, my freedom eroded into an imprisonment of boredom. My
            first few months of work kept me occupied. But the pace of learning
            at my job was far less than what I experienced in college. Plus, I
            could only handle so much YouTube, Netflix, and Reddit.
          </p>
        </Col>
      </Row>

      <style jsx>
        {`
          .blog-title {
            display: flex;
            justify-content: center;
            margin: 50px 0 25px 0;
          }
          .blog-title h1 {
            font-weight: 400;
            font-family: "Times New Roman", serif;
          }
          p {
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
