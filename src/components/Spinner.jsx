import React, { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

function Spinner() {
  const [loading, setLoading] = useState(true);
  return (
    <div style={containerStyle}>
      <ScaleLoader
        color="blue"
        loading={loading}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
