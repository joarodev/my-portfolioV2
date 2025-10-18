import React from 'react'
import Experience from './components'
import { useLanguage } from '../../../context/LanguageContext';
import CardFeature from './components/CardFeature';
import { Brain, ChartNetwork, Lightbulb } from 'lucide-react';

export default function AboutMe() {
  const {t, language} = useLanguage();

  return (
    <section id="about" className="bg-bg text-fg py-20 flex flex-col justify-center items-center ">
      <div className="mx-auto px-6 w-full md:max-w-7xl">
        <h2 className="title-text font-bold text-center">{t("aboutme.title")}</h2>
        <p className="mt-4 regular-text md:text-center">
          {t("aboutme.description")}
        </p>
      </div>
      <div className='flex justify-between items-center py-5 mx-3 w-full flex-col md:flex-row md:max-w-7xl'>
        <CardFeature icon={Brain} title={t("aboutme.card.brain.title")} description={t("aboutme.card.brain.description")}/>
        <CardFeature icon={ChartNetwork} title={t("aboutme.card.chart.title")} description={t("aboutme.card.chart.description")}/>
        <CardFeature icon={Lightbulb} title={t("aboutme.card.lighbulb.title")} description={t("aboutme.card.lighbulb.description")}/>
      </div>
      <Experience/>
    </section>
  )
}
