import { Col } from "react-bootstrap";

function Nothing() {
  return (
    <Col xs={{ span: 12 }}>
      <div className="nothing">
        <h3>👋 Hi, nothing yet, adding my first blog soon 🚀.</h3>
        <h1>💃🏽</h1>
      </div>

      <style jsx>
        {`
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
    </Col>
  );
}
export default Nothing;
