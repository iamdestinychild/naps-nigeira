import React from "react";
import Eventcard from "./Eventcard";

function Events() {
  return (
    <div className="events-component">
      <h1>Event</h1>
      <span className="section-line"></span>
      <div className="events-container">
        <Eventcard
          image="/assets/images/event1.jpg"
          title="The Inaugaural Nigerian School On High Energy"
          paragraph="Are you a Nigerian student, graduate or university lecturer looking to build a portfolio that attracts international opportunities?"
        />

        <Eventcard
          image="/assets/images/event1.jpg"
          title="The Inaugaural Nigerian School On High Energy"
          paragraph="Are you a Nigerian student, graduate or university lecturer looking to build a portfolio that attracts international opportunities?"
        />

        <Eventcard
          image="/assets/images/event1.jpg"
          title="The Inaugaural Nigerian School On High Energy"
          paragraph="Are you a Nigerian student, graduate or university lecturer looking to build a portfolio that attracts international opportunities?"
        />
      </div>
    </div>
  );
}

export default Events;
