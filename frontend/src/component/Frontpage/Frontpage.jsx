import React from "react";
import "./Frontpage.css";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const Frontpage = () => {
  return (
    <div className="container">
      <div className="star">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <BsStarHalf />
        <div className="stars">4.5[500+reviews]</div>
      </div>
      <div className="head">
        <h1>
          Powerful time tracking software with <br></br>hassle-free integrations
        </h1>
      </div>
      <div className="para">
        <h1>
          Accurate time tracker for budgeting, client invoicing and painless
          payroll.<br></br> Works with the apps your team already use
        </h1>
      </div>
      <div className="input">
        <input type="text" placeholder="Work email..." />
        <button>Try free</button>
      </div>
      <div className="google">
        <FcGoogle />
        <a href="#">Or sign up with Google Account</a>{" "}
      </div>

      <div className="head2">
        <h1>
          Track time and watch progress inside <br></br>the most popular apps
        </h1>
      </div>
      <div className="logo">
        <div>Asana</div>
        <div>Trello</div>
        <div>Basecamp</div>
        <div>Jira</div>
        <div>Github</div>
        <div>ClickUp</div>
        <div>Monday</div>
        <div>Notion</div>
      </div>
    </div>
  );
};

export default Frontpage;
