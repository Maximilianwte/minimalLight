import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./Contact.css";

ReactGA.pageview("/Kontakt");

class Contact extends Component {
  render() {
    return (
      <div className="container fullPage" id="contact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kontakt | Light - Webexperiences aus Hamburg.</title>
          <meta
            name="description"
            content="Großartige Webapps maßgeschneidert für deine Ansprüche von Light aus Hamburg."
          />
          <meta
            name="keywords"
            content="Light, Lightstrategies, Hamburg, Germany, Deutsch, Deutschland, de, Maximilian, Witte, Website, Design, Apps, Web App, Deutschland, Bots, Alexa Bot, Messenger Bot, Google Home Bot, Agency, Agentur, beauftragen, Schleswig-Holstein"
          />
        </Helmet>
        <div className="Head">
          <h2>Kontakt</h2>
        </div>
        <div className="textTop">
          <p>Ich bin gespannt von Ihrem Projekt zu hören.</p>
        </div>
        <div className="Profile" id="Profile">
          <img
            src={require("../../Assets/MaximilianWitte.png")}
            alt="Maximilian Witte"
            title="Maximilian Witte"
          />
          <h3>Maximilian Witte</h3>
          <div className="socialPersonal">
            <div className="Social">
              <div className="Social" id="Facebook">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/lightstrategies/"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
              </div>
              <div className="Social" id="Instagram">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/maxfromlight/"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                </a>
              </div>
              <div className="Social" id="LinkedIn">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/maximilian-witte-b4a42911b/"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
              <div className="Social" id="Github">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Maximilianwte"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/maximilianwitte@lightstrategies.com"
          method="POST"
        >
          <div className="Form" id="">
            <svg id="Ebene_1" viewBox="0 0 128 128">
              <defs />
              <path
                className="cls-1"
                d="M14.67,93.5A5.18,5.18,0,0,1,9.5,88.33V35.67a5.16,5.16,0,0,1,5.17-5.17h98.66a5.18,5.18,0,0,1,5.17,5.17V88.33a5.18,5.18,0,0,1-5.17,5.17Z"
              />
              <path d="M113.33,31A4.67,4.67,0,0,1,118,35.67V88.33A4.67,4.67,0,0,1,113.33,93H14.67A4.67,4.67,0,0,1,10,88.33V35.67A4.68,4.68,0,0,1,14.67,31h98.66m0-1H14.67A5.67,5.67,0,0,0,9,35.67V88.33A5.67,5.67,0,0,0,14.67,94h98.66A5.67,5.67,0,0,0,119,88.33V35.67A5.67,5.67,0,0,0,113.33,30Z" />
              <polyline
                className="cls-2"
                points="116.5 32.5 63.5 61.5 11.5 32.5"
              />
              <line
                className="cls-2"
                x1="11.5"
                x2="49.43"
                y1="91.5"
                y2="53.57"
              />
              <line
                className="cls-2"
                x1="116.5"
                x2="78.28"
                y1="91.5"
                y2="53.28"
              />
            </svg>
            <input name="Vor- & Nachname:" type="text" placeholder="Name" />
            <input name="Antwort An:" type="email" placeholder="Email" />
            <input name="Betreff:" type="text" placeholder="Betreff" />
            <textarea name="Nachricht:" placeholder="Nachricht" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input
              defaultValue="Abschicken"
              type="submit"
              id="SubmitButton"
              onClick={ReactGA.event({
                category: "Behaviour",
                action: "Contact Form Used"
              })}
            />
          </div>
          <input type="hidden" name="_subject" value="Light Kontaktanfrage" />
          <input
            type="hidden"
            name="_next"
            value="https://de.lightstrategies.com/kontakt"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
