import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Button from '../../components/ui/Buttons/Button';

export default function Error404() {

  const {t, language} = useLanguage();

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-bg2'>
        <h1 className='text-8xl font-bold text-fg mb-6'>404</h1>
        <p className='text-2xl text-secondary mb-6'>{t("404.title")}</p>
        <Button path="/" text={t("404.description")}/>
    </div>
  )
}
