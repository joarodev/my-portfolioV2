import React from 'react'
import ButtonSlide from '../../../components/ui/Buttons/ButtonSlide'
import { useLanguage } from '../../../context/LanguageContext'

export default function ProjectSection() {


    const {t} = useLanguage();

  return (
    <div id='project' className='w-full my-3 py-5 flex flex-row justify-center items-center bg-bg'>
        <ButtonSlide text={t("project.button.text")} path="/projects" />
    </div>
  )
}
