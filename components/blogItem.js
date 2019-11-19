import { Col } from "react-bootstrap";
import Link from "next/link";

import Moment from "moment";

function BlogItem({ title, image, contentPreview, createdAt, content }) {
  return (
    <Col md={{ span: "5", offset: 1 }} sm="12">
      <div className="blog-item">
        <Link
          href={`/read?content=${content}`}
          as={`/read/${title.split(" ").join("-")}`}
        >
          <a>
            <h4>{title}</h4>
            <p className="text-muted">{contentPreview}</p>
          </a>
        </Link>
        <h6 className="text-muted">
          {Moment(createdAt.seconds * 1000).calendar()}
        </h6>
      </div>

      <style jsx>
        {`
          .blog-item {
            margin: 15px 0 15px 0;
          }
          .blog-item a {
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </Col>
  );
}

export default BlogItem;
