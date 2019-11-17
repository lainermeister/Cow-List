import React from "react";
import ReactDOM from "react-dom";

const AddCow = ({ handleSubmit }) => (
  <>
    <div>Add Cow</div>
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        Name: <input id="cowName" type="text" />
      </div>
      <div>
        Description: <input id="cowDescription" type="text" />
      </div>
      <button id="submit">Add New Cow</button>
    </form>
  </>
);

export default AddCow;
