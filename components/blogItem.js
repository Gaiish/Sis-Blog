import { Col } from "react-bootstrap";
import Link from "next/link";

function BlogItem({ title, image, extrait, createdAt }) {
  return (
    <Col md={{ span: "5", offset: 1 }} sm="12">
      <div className="blog-item">
        <Link href="/read">
          <a>
            <h4>{title}</h4>
            <p className="text-muted">{extrait}</p>
          </a>
        </Link>
        <h6 className="text-muted">{createdAt}</h6>
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
