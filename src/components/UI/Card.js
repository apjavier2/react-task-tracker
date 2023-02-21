import "./Card.css";
import React from "react";

/*
Description: This is a reusable wrapper container that creates a card component
*/

export default function Card(props) {
  //this allows the classes that are set to be both reflected
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
