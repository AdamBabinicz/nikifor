import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/13.jpg";
import email from "../img/14.jpg";
import location from "../img/15.jpg";
import table from "../img/19.jpg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Upamiętnienie"} span={"Nikifora"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.490890158349!2d20.953908415223754!3d49.41853276905713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e7621b17ee03d%3A0x4fc9bebce66d4409!2sMuzeum%20Nikifora%20w%20Willi%20Roman%C3%B3wka!5e0!3m2!1spl!2spl!4v1612014126214!5m2!1spl!2spl"
            width="450"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-set">
          <ContactItem
            icon={phone}
            text1={"9 września 2005'"}
            text2={"fot. by Henryk Bielamowicz - Praca własna, CC BY-SA 4.0,"}
            title={"Pomnik Nikifora w Krynicy-Zdroju"}
          />
          <ContactItem
            icon={email}
            text1={""}
            text2={"fot. by Henryk Bielamowicz - Praca własna, CC BY-SA 4.0,"}
            title={
              "Tablica na ścianie frontowej cerkwi greckokatolickiej w Krynicy-Zdroju"
            }
          />
          <ContactItem
            icon={location}
            text1={"maj 2006'"}
            text2={"fot. by Tomasz Leśniowski - Praca własna, CC BY-SA 4.0,"}
            title={"Pomnik Nikifora we Lwowie"}
          />
          <ContactItem
            icon={table}
            text1={"10 października 2008'"}
            text2={"fot. by Tomasz Leśniowski - Praca własna, CC BY-SA 4.0,"}
            title={"Tablica na ścianie DPS w Foluszu"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
