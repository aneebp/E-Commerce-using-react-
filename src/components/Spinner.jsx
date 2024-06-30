import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <RingLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
export default Spinner;
