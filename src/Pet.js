import React from "react";

const Pet = (props) => {
  // props we give information from parent component to child component
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

export default Pet;
