import React from "react";

function Community() {
  return (
    <div>
      <section className="cta-five">
        <img
          src="/images/team-1-1.jpg"
          className="cta-five__members-1"
          alt={"img"}
        />
        <img
          src="/images/team-1-2.jpg"
          className="cta-five__members-2"
          alt={"img"}
        />
        <img
          src="/images/team-1-3.jpg"
          className="cta-five__members-3"
          alt={"img"}
        />
        <img
          src="/images/team-1-4.jpg"
          className="cta-five__members-4"
          alt={"img"}
        />
        <img
          src="/images/team-1-5.jpg"
          className="cta-five__members-5"
          alt={"img"}
        />
        <img
          src="/images/team-1-6.jpg"
          className="cta-five__members-6"
          alt={"img"}
        />
        <div className="cta-five__bubble-1">
          <i className="fas fa-rocket" />
        </div>
        <div className="cta-five__bubble-2">
          <i className="fas fa-bolt" />
        </div>
        <div className="container text-center">
          <h2 className="cta-five__title">
            Start growing with <br />
            the community
          </h2>
          <p className="cta-five__text">
            Duis aute irure dolor in reprehenderit in velit esse
          </p>
          <a href="/" className="thm-btn cta-five__btn">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}

export default Community;
