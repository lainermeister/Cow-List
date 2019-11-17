import React from "react";
import ReactDOM from "react-dom";

const SelectedCow = ({ cow }) => (
  <div>
    <div>
      Selected Cow Name: {cow.name} | Description: {cow.description}
    </div>
  </div>
);
export default SelectedCow;
