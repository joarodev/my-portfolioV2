import React, { useEffect, useState } from 'react'
import { publicationsFirebase } from '../../data/firebase'
import CardPublication from './components/CardPublication/CardPublication'
import { useLanguage } from '../../context/LanguageContext'
import CardPublicationSkeleton from './components/CardPublication/Skeleton'
import BgFeadeTop from '../../components/Backgrounds/BgFeadeTop'

export default function Publications() {
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)
    const { t } = useLanguage()

    useEffect(() => {
        publicationsFirebase()
            .then(data => {
                setPublications(data)
                setLoading(false)
            })
    }, [])

    return (
        <section id='publications' className='w-full text-fg '>
            <BgFeadeTop>
                <div className='w-full text-fg px-6 mx-auto py-20 flex flex-col sm:items-center z-10 md:max-w-7xl'>
                    <h1 className='title-text text-fg mb-3'>{t('publications.title')}</h1>
                    <p className='text-fg/80 text-lg'>{t('publications.description')}</p>
                    <div className="w-full flex flex-wrap mt-6">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <CardPublicationSkeleton key={index} />
                            ))
                        ) : (
                            publications.map(publication => (
                                <CardPublication key={publication.id} publication={publication} />
                            ))
                        )}
                    </div>
                </div>
            </BgFeadeTop>
        </section>
    )
}
