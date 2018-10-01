import React from "react";
import { render } from "react-dom";
import { delimiter } from "../../src";
const App = () => (
  <div style={{ textAlign: "center" }}>
    <h2>Array: [1,2,3]</h2>
    <h2>String: and, or</h2>
    <h2>delimiter(Array, String)</h2>
    <center>
      <table style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black" }}>
          <td>Input</td>
        </th>
        <th style={{ border: "1px solid black" }}>
          <td>Output</td>
        </th>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>
            delimiter([1, 2, 3], "and")
          </td>
          <td style={{ border: "1px solid black" }}>
            {delimiter([1, 2, 3], "and")}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>
            delimiter([1, 2, 3], "or")
          </td>
          <td style={{ border: "1px solid black" }}>
            {delimiter([1, 2, 3], "or")}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>delimiter([1, 2], "or")</td>
          <td style={{ border: "1px solid black" }}>
            {delimiter([1, 2], "or")}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>
            delimiter([1, 2], "and")
          </td>
          <td style={{ border: "1px solid black" }}>
            {delimiter([1, 2], "and")}
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>delimiter([1], "or")</td>
          <td style={{ border: "1px solid black" }}>{delimiter([1], "or")}</td>
        </tr>
        <tr>
          <td style={{ border: "1px solid black" }}>delimiter([1], "and")</td>
          <td style={{ border: "1px solid black" }}>{delimiter([1], "and")}</td>
        </tr>
      </table>
    </center>
  </div>
);
render(<App />, document.getElementById("root"));
