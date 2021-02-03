import React from "react";
import about from "../img/9.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import plik from "../nikifor.pdf";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="Nikifor" />
      </div>
      <div className="about-info">
        <h4>
          <FaQuoteLeft className="quote" />
          <span>
            &nbsp; Samouk, zaliczany do grona najwybitniejszych na świecie
            malarzy tzw. naiwnych, prymitywistów.
          </span>
        </h4>
        {/* <p className="about-text">
          Był z pochodzenia – po matce – Łemkiem (jego ojciec był Polakiem,
          według legendy – uznanym malarzem, kryptonimowanym jako "T"). Także po
          matce, która wychowywała go samotnie, w wielkiej biedzie i
          poniewierce, najmując się do różnych prac gospodarskich, odziedziczył
          wadę słuchu i wymowy. <br />
          <br /> Osierocony podczas I wojny światowej, nie umiejący porozumieć
          się z otoczeniem, traktowany był początkowo przez krynicką społeczność
          jako odmieniec - izolowany fizycznie i psychicznie, wyśmiewany. Nie
          wiadomo, skąd wzięło się jego imię (przezwisko? oryginalnie brzmiało
          ono prawdopodobnie Netyfor), w każdym razie używał go od najmłodszych
          lat. Przez długi czas posługiwał się wyłącznie tym imieniem.
          <br />
          <br /> W roku 1949, przy okazji pierwszej indywidualnej wystawy prac,
          która odbyła się w warszawskim salonie SARP-u, mianowano go
          okazjonalnie "Janem Nikiforem" (uwiecznił to afisz). Dopiero w 1963
          roku urzędowo nadano mu nazwisko "Krynicki", co stanowiło
          przypieczętowanie administracyjnej normalizacji jego statusu
          (jednocześnie od władz Krynicy otrzymał mieszkanie). Natomiast w 2003
          roku sąd w Muszynie rozstrzygnął, że prawdziwe imię i nazwisko
          Nikifora to: Epifaniusz (Epifan) Drowniak.
        </p> */}
        <div className="about-details">
          <div className="left-section">
            <p>
              Imię i&nbsp;nazwisko: Nikifor Epifan Drowniak, Nikifor Krynicki,
              Jan Nikifor, Nikifor Matejko, Никифор Єпіфан Дровняк
            </p>
            <p>
              Data urodzin i&nbsp;śmierci: 21 maja 1895 - 10 października 1968
            </p>
            <p>Narodowość: Polak, Łemko</p>
            <p>Język: polski, łemkowski</p>
            <p>Wyznanie: greckokatolickie</p>
            <p>Adres: Krynica - Zdrój (Krynica)</p>
            <p>Kraj: Polska</p>
          </div>
          {/* <div className="right-section">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div> */}
        </div>
        <Link to={plik} target="_blank">
          <button className="btn">Pobierz</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
