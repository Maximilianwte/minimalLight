import React, { Component } from "react";
import { TweenLite, TimelineLite, css } from "gsap";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./Apps.css";
ReactGA.pageview("/apps");

class Apps extends Component {
  constructor(props) {
    super(props);
    this.jumpTo = this.jumpTo.bind(this);
  }
  switchImage = e => {
    if (e.target.id === "first") {
      $(".websiteExample#first").toggleClass("switchExample");
    } else if (e.target.id === "second") {
      $(".websiteExample#second").toggleClass("switchExample");
    } else if (e.target.id === "third") {
      $(".websiteExample#third").toggleClass("switchExample");
    }
  };
  jumpTo = () => {
    this.docTimeline.play(5);
  };
  componentDidMount() {
    // Initialize the timeline.
    var docTimeline = new TimelineLite({ paused: true });
    docTimeline
      .add(TweenLite.to(".text#first", 0.5, { y: "-5%", opacity: "1" }))
      .addPause()
      .to(".Apps#first", 0.5, { y: "-100%" })
      .to(".Apps#second", 0.5, { y: "0%" })
      .to(".textContainer#zero", 0, { display: "flex" })
      .to(".textInlet#zero", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".textInlet#zero", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#zero", 0, { display: "none" })
      .to(".textContainer#first", 0, { display: "flex" })
      .to(".textInlet#first", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".textInlet#first", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#first", 0, { display: "none" })
      .to(".textContainer#second", 0, { display: "flex" })
      .to(".textInlet#second", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".textInlet#second", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#second", 0, { display: "none" })
      .to(".textContainer#third", 0, { display: "flex" })
      .to(".textInlet#third", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".textInlet#third", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#third", 0, { display: "none" })
      .to(".textContainer#weUse", 0, { display: "initial" })
      .to(".textContainer#weUse", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".textContainer#weUse", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#weUse", 0, { display: "none" })
      .to(".textContainer#examples", 0, { display: "flex" })
      .to(".inletContainer#examples", 0.5, { y: "0%", opacity: "1" })
      .addPause()
      .to(".inletContainer#examples", 0.5, { y: "10%", opacity: "0" })
      .to(".textContainer#examples", 0, { display: "none" })
      .to(".textContainer#pricing", 0, { display: "flex" })
      .to(".PricingContainer", 0.5, { y: "0%", opacity: "1" });

    // While dev testing!
    docTimeline.play(6);

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
        category: "Behaviour Apps",
        action: "Scrolled"
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
            content="Awesome Web Apps, Voice and Chat Bots for your Company built exactly for your needs by Light from Hamburg, Germany."
          />
          <meta
            name="keywords"
            content="Light, Lightstrategies, Hamburg, Germany, Website, Design, Apps, Web App, Deutschland, Bots, Alexa Bot, Messenger Bot, Google Home Bot, Agency, Agentur, beauftragen, Schleswig-Holstein"
          />
        </Helmet>
        <div className="fullContainer Apps" id="first">
          <div className="text textSolo" id="first">
            <h3>Deine modernste Webapp beginnt jetzt.</h3>
          </div>
        </div>
        <div className="fullContainer Apps" id="second">
          <div className="textContainer" id="zero">
            <div className="textInlet" id="zero">
              <h3>Wieso wir an Apps im Browser glauben.</h3>
            </div>
          </div>
          <div className="textContainer" id="first">
            <div className="textInlet" id="first">
              <h2>1</h2>
              <h3>Eine App, alle Plattformen.</h3>
              <p>
                Weniger Code bedeutet, weniger Bugs & Kosten und dafür 100%
                Nutzerfreundlichkeit.
              </p>
              <button onClick={this.jumpTo}>Zu den Beispielen</button>
            </div>
          </div>
          <div className="textContainer" id="second">
            <div className="textInlet" id="second">
              <h2>2</h2>
              <h3>Die Power von Javascript.</h3>
              <p>
                Javascript gibt uns alle Möglichkeiten moderne, sichere und
                blitzschnelle Apps zu bauen.
              </p>
            </div>
          </div>
          <div className="textContainer" id="third">
            <div className="textInlet" id="third">
              <h2>3</h2>
              <h3>Alle Analytics.</h3>
              <p>
                Wir statten ihre Webapp mit allen nötigen Tools für Google
                Analytics aus. So wissen sie immer wie es um ihr Wachstum steht.
              </p>
            </div>
          </div>
          <div className="textContainer" id="weUse">
            <h3>Unsere Technologie</h3>
            <div className="inletContainer" id="weUse">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactjs.org/"
              >
                <img
                  src={require("../../Assets/React.png")}
                  alt="React.js"
                  title="React.js"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nodejs.org/en/"
              >
                <img
                  src={require("../../Assets/Node.png")}
                  alt="Node.js"
                  title="Node.js"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://firebase.google.com/"
              >
                <img
                  src={require("../../Assets/Firebase.png")}
                  alt="Google Firebase"
                  title="Google Firebase"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.contentful.com/"
              >
                <img
                  src={require("../../Assets/Contentful.png")}
                  alt="Contentful CMS"
                  title="Contentful CMS"
                />
              </a>
            </div>
          </div>
          <div className="textContainer" id="examples">
            <div className="inletContainer" id="examples">
              <h5>Check Out Our App Examples.</h5>
              <div className="AppList container">
                <div
                  className="AppBanner"
                  id="first"
                  onClick={this.switchImage}
                >
                  <img
                    src={require("../../Assets/Yoga.jpg")}
                    alt="WebApp Design"
                    title="WebApp Design"
                  />
                </div>

                <div
                  className="AppBanner"
                  id="second"
                  onClick={this.switchImage}
                >
                  <img
                    src={require("../../Assets/Idea6.jpg")}
                    alt="WebApp Design"
                    title="WebApp Design"
                  />
                </div>

                <div
                  className="AppBanner"
                  id="third"
                  onClick={this.switchImage}
                >
                  <img
                    src={require("../../Assets/Shop.jpg")}
                    alt="WebApp Design"
                    title="WebApp Design"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="textContainer" id="pricing">
            <div className="inletContainer" id="pricing">
              <div className="PricingContainer">
                <div className="containerInlet">
                  <h4>We guarantee you the best price possible!</h4>
                  <h5>
                    If you find a better deal, we build your app for that price.
                  </h5>
                </div>
              </div>
              <div className="contact">
                <p>contact us for more information, request or discounts.</p>
                <div className="button">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="websiteExamples">
          <div class="websiteExample" id="first" onClick={this.switchImage}>
            <img
              src={require("../../Assets/Yoga.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
          <div class="websiteExample" id="second" onClick={this.switchImage}>
            <img
              src={require("../../Assets/Idea6.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
          <div class="websiteExample" id="third" onClick={this.switchImage}>
            <img
              src={require("../../Assets/Shop.jpg")}
              alt="WebApp Design"
              title="WebApp Design"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
