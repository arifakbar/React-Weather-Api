import React from "react";
import ReactDom from "react-dom";

function Loading(props) {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui text loader">{props.text}</div>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  text: "Loading...",
};

export default Loading;
