import React from "react";
import { Button } from "reactstrap";

const FormNasabah = (props) => {
  return (
    <>
      <h1>data nasabah</h1>
      <Button color="primary" onClick={props.prev}>
        Previous
      </Button>
    </>
  );
};

export default FormNasabah;
