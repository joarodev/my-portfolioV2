import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../../context/LanguageContext'

export default function CardPublication({ publication }) {
    const { id, title, subtitle, image } = publication
    const { t } = useLanguage()
    return (
        <div className="w-full mx-2 bg-bg2/30 border border-secondary/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg shadow-lg">
                <img className="w-full mt-2 shadow-lg border border-secondary/5 rounded-2xl h-56 object-cover object-center" src={image} alt={title} />
                <div className="py-4">
                    <h2 className="text-2xl font-bold text-fg mb-2">{title}</h2>
                    <p className="text-md text-fg mb-4">{subtitle}</p>
                    <div className='flex flex-col justify-end items-end'>
                        <Link to={`/publications/${id}`} className="inline-block flex-1 text-center py-2 px-3 bg-primary/30 border border-secondary text-fg text-sm rounded-md hover:bg-primary-hover transition-all">
                            {t('publications.card.read_more')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
