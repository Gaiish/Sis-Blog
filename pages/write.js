// TODO: Polish UX and UI

import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Container, Row, Col, Button } from "react-bootstrap";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

var Moment = require("moment");

function Write() {
  const [user, setUser] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showEditor, setShowEditor] = useState(false);
  const [blogPreview, setBlogPreview] = useState(null);

  useEffect(() => {
    // check if logged in and if not redirect to loggin
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        // redirect to login
        Router.replace("/login");
      }
    });
  }, []);

  useEffect(() => {
    // show the Editor when the component has mounted
    if (!showEditor && !blogPreview) {
      setShowEditor(true);
    }
  }, []);

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  const preview = () => {
    console.log("[preview]");
    const out = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setBlogPreview(out);
  };

  const publish = () => {
    console.log("[publish]");
    const db = firebase.firestore();

    const blogContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    const paragraph_1 = convertToRaw(editorState.getCurrentContent()).blocks[1]
      .text;
    const contentPreview = paragraph_1.slice(0, 50);

    const newBlog = {
      title: convertToRaw(editorState.getCurrentContent()).blocks[0].text,
      contentPreview,
      content: blogContent,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection("blogs")
      .add(newBlog)
      .then(
        () => {
          console.log("[new blog added]");
        },
        err => {
          console.log("[failed to add the new blog]");
        }
      );
  };

  const edit = () => {
    setBlogPreview(null);
  };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ span: 8, offset: 2 }}>
          <h5>
            Start writing ✍🏾✍🏾. <b>{Moment().format("dddd D MMM")}</b>.
          </h5>

          {showEditor && (
            <div
              className="main-wrapper"
              style={blogPreview && { display: "none" }}
            >
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperStyle={{
                  height: "55vh"
                }}
                editorStyle={{
                  border: "solid 1px rgba(0, 0, 0, 0.08)"
                }}
              />
            </div>
          )}

          {/* preview */}
          {blogPreview && (
            <div
              className="main-wrapper"
              dangerouslySetInnerHTML={{ __html: blogPreview }}
            />
          )}

          <div className="btns">
            {!blogPreview && (
              <Button
                variant="primary"
                onClick={preview}
                className="button"
                style={{ marginLeft: "10px" }}
              >
                Preview
              </Button>
            )}

            {blogPreview && (
              <Button
                variant="primary"
                onClick={edit}
                className="button"
                style={{ marginLeft: "10px" }}
              >
                Edit
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={publish}
              className="button"
              style={{ marginLeft: "10px" }}
            >
              Publish
            </Button>
          </div>
        </Col>
      </Row>

      <style jsx>
        {`
          h5 {
            margin: 10px 0 20px 0;
            font-weight: 300;
          }
          .btns {
            display: flex;
            justify-content: flex-end;
          }
          .main-wrapper {
            height: 75vh;
          }
        `}
      </style>
    </Container>
  );
}

export default Write;
