import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/5.svg";
import design1 from "../img/3.svg";
import design2 from "../img/2.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"Netyfor"} span={"Никифор Єпіфан Дровняк"} />
      <ImageSection />
      <Tittle title={"Wystawy"} span={"niosący zwycięstwo"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Lwów"} progress={"1930'"} width={"60%"} />
        <SkillsSection
          skill={"warszawska sala SARP"}
          progress={"31.01. - 08.02.1949'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"paryska galeria Diny Vierny"}
          progress={"22.05. - 30.06.1958'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Amsterdam"}
          progress={"02.10. - 26.10.1959'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Bruksela"}
          progress={"14.11. - 26.11.1959'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Liège (Leodium)"}
          progress={"25.11. - 13.12.1959'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Hajfa"}
          progress={"04.02. - 1960'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Baden-Baden"}
          progress={"02.07. - 04.09.1961'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Frankfurt nad Menem"}
          progress={"16.09. - 19.10.1961'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"Hanover"}
          progress={"29.10. - 10.12.1961'"}
          width={"60%"}
        />
        <SkillsSection
          skill={"warszawska Zachęta"}
          progress={"1967'"}
          width={"60%"}
        />
      </div>
      <Tittle title={"Życie i twórczość"} span={"Tożsamość"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Życiorys"}
          text={
            "„Nikifor żył samotnie, w nędzy, przez większość życia będąc uważanym za niepełnosprawnego intelektualnie. Był pochłonięty pasją malarską. Pod koniec życia został doceniony i uznany na całym świecie za jednego z najwybitniejszych prymitywistów.”"
          }
          text1={"https://pl.wikipedia.org/wiki/Nikifor_Krynicki"}
        />
        <ServicesSection
          image={design1}
          title={"Twórczość"}
          text={
            "„Talent Nikifora przejawiał się głównie w twórczości na kawałkach tektury, okładkach zeszytów, skrawkach papieru, na których uwieczniał autoportrety, widoki krynickich willi i cerkwi. Stworzył blisko 40 tysięcy dzieł.”"
          }
          text1={"https://pl.wikipedia.org/wiki/Nikifor_Krynicki"}
        />
        <ServicesSection
          image={design2}
          title={"Tożsamość"}
          text={
            "„Nikifor był synem Polaka nieznanego z nazwiska, prawdopodobnie z zawodu malarza, jakich wielu mieszkało wtedy w willi „Trzy Róże”, i Eudokii Drowniak – ubogiej, głuchoniemej łemkowskiej żebraczki.”"
          }
          text1={"https://pl.wikipedia.org/wiki/Nikifor_Krynicki"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
