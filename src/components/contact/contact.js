import "./contact.css";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const  Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
                <a
          href=""
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+373 79 99 87 67</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/gageadan/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Gagea_Danu</span>
          </h2>
        </a>
        <a href="https://github.com/GageaD" className="contact instagram">
        <AiOutlineGithub className="icon" />
        <h2>
          GitHub <span> Gagea Danu</span>
        </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
