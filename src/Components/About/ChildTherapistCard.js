import React, {useState} from "react";
import "./CardTherapist.css";
import TherapistData from "./TherapistData";
import person from "../images/person.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";


import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function ChildTherapistCard() {
  const socialLinksicon= [
    { url: "https://facebook.com", icon: <FaFacebook/>, label: "Facebook" },
    { url: "https://twitter.com", icon: <FaTwitter/>, label: "Twitter" },
    { url: "https://linkedin.com", icon: <FaLinkedinIn/>, label: "Linkedin" },
    // Add more social links as needed
  ];


  const [isScriptLoaded, setScriptLoaded] = useState(false);
  const loadScript = () => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
  };

  const typeformJSX = (
    <div data-tf-live="01HHJKZWD2ST89SEYYG6A8V0T1"></div>
  )
  return (
    <div className="container">
        <div className="therapist">
            <h3>Healing Team Ensemble </h3>
            <h1>Introducing Our Child Therapist Team</h1>
            <p> Trained in leading global therapies, our diverse team of child counseling therapists genuinely cares about guiding you toward your goals.</p>
            <span></span>
            <div className="therapistcard">
                <TherapistData
                img={person1}
                heading="Dr. Kirti Eppanapelli"
                text="MBBS, psychiatrist"
                socialLinks={socialLinksicon}
                />

                <TherapistData
                img={person}
                heading="Dr. Siddhant Bhoi"
                text="Relationship psychologist"
                socialLinks={socialLinksicon}
                />

                <TherapistData
                img={person2}
                heading="Dr. Ruchita Dalvi"
                text="Physiotherapist"
                socialLinks={socialLinksicon}
                />

                
            </div>
            <button className="match" onClick={loadScript}> Get Matched Now</button>
            {isScriptLoaded && typeformJSX}
        </div>
    </div>
  );
}

export default ChildTherapistCard;