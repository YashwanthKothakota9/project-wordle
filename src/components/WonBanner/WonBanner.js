import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 Guess" : `${numOfGuesses} Guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
