import React from "react";
import style from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import WithSubnavigation from "../Navbar/Navbar";
import LargeWithAppLinksAndSocial from "../Footer/Footer";

const Confirmation = () => {
  const navigate = useNavigate();

  const HandleStart = () => {
    navigate("/");
  };
  return (
    <>
      <div style={{marginBottom:"400px"}}>
        <WithSubnavigation/>
        <div className={style.confirmationmain}>
          <div style={{ marginLeft: "20px", padding: "30px" }}>
            <h1 className={style.confirmation1}>Payment Successfull</h1>
            <div className={style.confirmation2}>
              Order Status : Confirmed ✔
            </div>
            <div className={style.confirmation7}>
              <img
                src="https://lumen5.com/learn/wp-content/uploads/2022/06/Blog-Thumbnail-Overlay-1-600x500.png"
                alt="image to be enter"
              />
            </div>
            <button style={{width:"90%",marginLeft:"220px"}} onClick={() => HandleStart()} className={style.checkbtn33}>
              Lets Start
            </button>
            <div className={style.confirmation3}>
              If opportunity doesn't knock, build a door.
            </div>
          </div>
          <div>
            <div className={style.confirmation4}>⦾ Order Details : </div>
            <div className={style.confirmation5}>
              ➼ Plan : {" "}
              <u>
                <i>Starter - v2 (Monthly)</i>
              </u>
            </div>
            <div className={style.confirmation6}>➼ Order ID : 345RT32</div>
            <div className={style.confirmation6}>
              ➼ Total Paid Amount : $50.00
            </div>
            <div className={style.confirmation6}>➼ Valid Till : 1 Month</div>
          </div>
        </div>
      </div>
      {/* <FooterLandingPage /> */}
      
      <LargeWithAppLinksAndSocial/>
    </>
  );
};

export default Confirmation;
