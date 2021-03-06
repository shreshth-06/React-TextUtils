import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text has been cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let extraText = text.split(/[ ]+/);
    setText(extraText.join(" "));
    props.showAlert(" Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
