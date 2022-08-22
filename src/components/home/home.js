import React from "react";
import "./home.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import mainicon from "../images/bee.png";
import blurbee from "../images/blurred_bee-.png";
import leaf from "../images/leaves1.png";

// import shadow from "../images/Shadow2.png";
// import shadow from "../images/Shadow.png"
import shadow from "../images/shadd.png";
import smoke from "../images/smoke-removebg-preview.png";
import beesh from "../images/bee shadows.png";
import pinkeff from "../images/pink circle thingy.png";
import sbee from "../images/sbee.png";
import yelloweff from "../images/yelloweff.png";
import bar from "../images/bar.png";
import Navbar from "../navbar/navbar";

export default function Home() {
  //   let btn = document.querySelector('.mouse-cursor-gradient-tracking');
  // btn.addEventListener('mousemove', e => {
  //   let rect = e.target.getBoundingClientRect();
  //   let x = e.clientX - rect.left;
  //   let y = e.clientY - rect.top;
  //   btn.style.setProperty('--x', x + 'px');
  //   btn.style.setProperty('--y', y + 'px');
  // });

  return (
    <div className="main123">
      <div className="row">
        <div className="bgimg">
          <img className="leaf" src={leaf} />
          <img className="shadow" src={shadow} />

          {/* <Navbar/> */}

          {/* <div className="col-md-2"></div> */}
        </div>
        <div className="col-md-6 mtext">
          <img className="smoke" src={smoke} />
          {/* <img className="smallbee" src={sbee} /> */}

          <div className="alltxt">
            <div className="txt5">
              <p>Honey</p>
            </div>
            <div className="txt6">
              <p>meets</p>
            </div>
            <div className="txt7">
              <p>Chocolate .</p>
            </div>
          </div>

          <img className="blurbee" src={blurbee} />

          <div className="maintxt2">
            <p>You've never tasted chocolate like this...</p>
          </div>

          <div className="maindiv3">
            {/* <div className="mouse-cursor-gradient-tracking"> */}
            <button className="btn">ORDER NOW</button>
          </div>
        </div>

        <div className="col-md-6 div1">
          <div className="grad">
            <img className="beesh" src={beesh} />

            {/* <img className="yelleff" src={yelloweff} /> */}

            <img className="iconing" src={mainicon}></img>

            {/* <img className="pinkeff" src={pinkeff} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
