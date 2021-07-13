import React from "react";

function OnlyMission() {
  return (
    <section
      className="cta-one cta-one__home-one"
      style={{
        backgroundImage: 'url("/images/cta-bg-1-1.jpg")',
      }}
    >
      <div className="container">
        <h2 className="cta-one__title">
          Kipso one &amp; only <br />
          mission is to extend <br />
          your knowledge base
        </h2>
        <div className="cta-one__btn-block">
          <a href="#" className="thm-btn cta-one__btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default OnlyMission;
