import React, { Component } from "react";
import { TweenLite, TimelineLite, css } from "gsap";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import swipe from "jquery-touchswipe";

ReactGA.pageview("/");

class Context extends Component {
  componentDidMount() {
    // Initialize the timeline.
    var docTimeline = new TimelineLite({ paused: true });
    docTimeline
      .add(TweenLite.to(".fullContainer#first", 1, { y: "200%" }))
      .to(".fullContainer#second", 0.5, { y: "0%" })
      .to(".text#first", 0.5, { y: "-5%", opacity: "1" })
      .to(".button#apps", 0.6, { y: "0%", opacity: "1" })
      .addPause()
      .reversed();

    var runOnce = 0;
    $(window).bind("mousewheel DOMMouseScroll", function(event) {
      if (runOnce === 0) {
        if (
          event.originalEvent.wheelDelta < 0 ||
          event.originalEvent.detail > 0
        ) {
          console.log("Scrolled");
          docTimeline.play();
          runOnce = 1;
          setTimeout(function() {
            runOnce = 0;
          }, 1000);
        } else {
          console.log("Scrolled");
          docTimeline.reverse();
          runOnce = 1;
          setTimeout(function() {
            runOnce = 0;
          }, 1000);
        }
      }
      ReactGA.event({
        category: "Behaviour Context",
        action: "Scrolled"
      });
    });

    $(function() {
      $("html").swipe({
        //Generic swipe handler for all directions
        swipe: function(
          event,
          direction
        ) {
          if (runOnce === 0) {
            if (direction === "up") {
              docTimeline.play();
              runOnce = 1;
              setTimeout(function() {
                runOnce = 0;
              }, 1000);
            } else if (direction === "down") {
              docTimeline.reverse();
              runOnce = 1;
              setTimeout(function() {
                runOnce = 0;
              }, 1000);
            }
          }
          ReactGA.event({
            category: "Behaviour Context",
            action: "Touch Scrolled"
          });
        }
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Light - Webexperiences aus Hamburg.</title>
          <meta
            name="description"
            content="Großartige Webapps maßgeschneidert für deine Ansprüche von Light aus Hamburg."
          />
          <meta
            name="keywords"
            content="Light, Lightstrategies, Hamburg, Germany,Deutsch, Deutschland,de, Website,Maximilian,Witte, Design, Apps, Web App, Deutschland, Bots, Alexa Bot, Messenger Bot, Google Home Bot, Agency, Agentur, beauftragen, Schleswig-Holstein"
          />
        </Helmet>
        <div className="fullContainer Context" id="first">
          <div className="lightLogo">
            <svg viewBox="0 0 1200 1200.0001">
              <defs />
              <path
                className="cls-1"
                d="M-114.8557,1335.1389v1200h1200v-1200h-1200Zm248.1238,668.5469H21.7837V1822.7523H32.7085v171.3047h100.56v9.6289Zm98.0762,0H220.4194V1822.7523h10.9248v180.9336Zm259.7168,0h-9.4355v-38.5176h-0.4966a55.6941,55.6941,0,0,1-9.6836,17.8652,60.2369,60.2369,0,0,1-15.27,13.43,76.4017,76.4017,0,0,1-19.6152,8.49,82.5273,82.5273,0,0,1-22.4707,3.041q-20.1123,0-35.63-7.35a76.5835,76.5835,0,0,1-26.1953-20.02,86.3477,86.3477,0,0,1-16.1392-29.7754,124.1166,124.1166,0,0,1,.124-73.2344,93.4725,93.4725,0,0,1,16.2637-30.5371,78.1161,78.1161,0,0,1,26.1948-20.9062q15.5149-7.7256,35.63-7.7285a83.5186,83.5186,0,0,1,26.0708,4.0547,70.0527,70.0527,0,0,1,22.2227,11.91,70.9968,70.9968,0,0,1,16.5117,19.0059,69.6972,69.6972,0,0,1,8.938,25.3408H477.6528q-6.2095-23.8169-22.3467-37.251-16.1433-13.43-40.72-13.4316-17.8777,0-31.5337,7.0957a68.1319,68.1319,0,0,0-22.8433,19.0059,84.69,84.69,0,0,0-13.9043,27.4951,116.2033,116.2033,0,0,0-.124,65.126,78.71,78.71,0,0,0,13.6558,26.7344,65.4156,65.4156,0,0,0,22.7192,18.1191q13.6523,6.7178,32.03,6.7168a73.0914,73.0914,0,0,0,28.5537-5.3223,60.4155,60.4155,0,0,0,21.4775-14.9512,63.0922,63.0922,0,0,0,13.2837-23.1875,84.2319,84.2319,0,0,0,3.7246-30.2812H416.3237v-9.6309H491.061v88.6934Zm239.6035,0H719.74v-89.1992H606.5171v89.1992H595.5923V1822.7523h10.9248v82.1035H719.74v-82.1035h10.9248v180.9336Zm222.4717-171.3047h-62.57v171.3047H879.6411V1832.3812H817.3189v-9.6289H953.1362v9.6289Z"
                transform="translate(114.8557 -1335.1389)"
              />
            </svg>
          </div>
          <div className="footer">
            <Link to="/impressum">Impressum</Link>
            <Link to="/privatsphäre">Privatsphäre</Link>
          </div>
        </div>
        <div className="fullContainer Context" id="second">
          <div className="text" id="first">
            <h3>Ihre Webapps sind bei uns in guten Händen.</h3>
          </div>
          <div className="button" id="apps">
            <Link to="/apps">Webapps</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Context;
