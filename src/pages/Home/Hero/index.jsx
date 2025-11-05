import React from "react";
import ButtonSlide from "../../../components/ui/Buttons/ButtonSlide";
import { GridBackground } from "../../../components/Backgrounds/BgGrid";
import imgProfile from "../../../assets/images/joarod_profile.jpg";
import Button from "../../../components/ui/Buttons/Button";
import { useLanguage } from "../../../context/LanguageContext";
import BgGridTop from "../../../components/Backgrounds/BgPointSides";
import BgPointSidesV2 from "../../../components/Backgrounds/BgPointSidesV2";
import ButtonClasic from "../../../components/ui/Buttons/ButtonClasic";
import SocialMediaButtons from "../../../components/ui/Buttons/SocialMediaButtons";

export default function HeroInfo({
  name = "Nombre Apellido",
  title = "Científico de Datos",
  description,
}) {
  const { t, language } = useLanguage();

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/cv.pdf";
  //   link.download = "cv.pdf";
  //   link.click();
  // };

  return (
    <header className="relative sm:h-screen sm:overflow-hidden bg-bg text-fg from-slate-900 via-slate-800 to-slate-900 z-0">
      <GridBackground>
        <BgPointSidesV2>
        <div className="mx-auto px-6 py-20 flex flex-col sm:flex-row items-center gap-8 z-10 md:max-w-7xl">
          <div className="w-full">
            <h1 className="title-text">{t("hero.name")}</h1>
            <p className="mt-3 tag-text">{t("hero.profession")}</p>

            <p className="mt-6 regular-text">{t("hero.description")}</p>

            <div  className="mt-6 flex flex-wrap gap-3">
              <ButtonSlide text={t("hero.button.proyects")} path="/projects" />
              <ButtonClasic text={t("hero.button.resume")} path="/resume" />
              <SocialMediaButtons/>
            </div>
          </div>

          <div className="w-5/6 sr-only lg:not-sr-only items-center justify-center md:h-1/2 md:justify-center lg:w-1/3 lg:justify-center">
            <img
              className="w-full s:w-full s:h-full hover:shadow-2xl rounded-xl "
              src={imgProfile}
              alt=""
            />
          </div>
        </div>
        </BgPointSidesV2>
      </GridBackground>
    </header>
  );
}
