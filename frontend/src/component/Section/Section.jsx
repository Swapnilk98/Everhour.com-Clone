import React from "react";
import { FcGoogle } from "react-icons/fc";

import "./Section.css";
const Section = () => {
  return (
    <div>
      <div className="parent">
        <div className="Master">
          <div>
            <h1> 1. Quick setup</h1>
            <p>
              Connect Everhour with your tool and start tracking time right
              away. No manual project setup required.
            </p>
          </div>
          <div>
            <h1>2. Native integration</h1>
            <p>
              Time tracking controls natively appears inside your project
              management tool, making it easy to track time.
            </p>
          </div>
          <div>
            <h1>3. Automatic updates</h1>
            <p>
              Everhour syncs changes automatically. That means your reports will
              always show the freshest data.
            </p>
          </div>
        </div>
        <div className="master2">
          <div className="lines">
            <h1>
              Everhour has helped 240,000+ people complete over 135 million
              tasks in 3 million projects
            </h1>
          </div>
          <div className="pgraph">
            <p>
              Everhour helps us track our engineering hours which is a
              requirement for several Government grants we have received.
              Without Everhour, we would be unable to accurately track the hours
              associated with each individual project we are working on as a
              company. The reports are easily customizable which allows me to
              extract the data I need. Everhour is a great tool for our time
              tracking needs!
            </p>
          </div>
          <div className="spara">
            <h1>Kelly Bonneau, CPA Accounting Manager at 7shifts</h1>
          </div>
          <div className="image">
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp"
              alt=""
            />
          </div>
        </div>
        <div className="sec">
          <div className="heading2">
            <h1>Take control of your time with Everhour</h1>
          </div>
          <div className="paras">
            <p>
              Beautiful integrations. Intuitive interface. No unexpected fees
            </p>
          </div>
          <div className="ip">
            <div className="input2">
              <input type="text" placeholder="Work email..." />
              <button>Try free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
