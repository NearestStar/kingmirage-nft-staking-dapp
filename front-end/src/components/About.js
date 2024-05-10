import React from "react";

function About() {
  return (
    <section className="about bg-light" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="text-center">
              <h1 className="about-title">who are the KingMirage?</h1>
              <p className="lead text-center">
                The KingMirage are an art collection for an NFT staking project
                built within the Polygon network, a KingMirage is a character
                that is part of an 10000 algorithmically generated collection
                consisting of extremely unique features. Each item can be staked
                on the KingMirage vault to receive KingMirage Token (KPT)
                rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
