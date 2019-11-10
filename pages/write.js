// TODO: Write blog page, add an editor for the page
// first check if the user is logged in if not redirect him/her to login

import React, { useEffect, useState } from "react";
import Router from "next/router";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function Write() {
  const [user, setUser] = useState(null);

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
  });

  return <div>Write blog...</div>;
}

export default Write;
