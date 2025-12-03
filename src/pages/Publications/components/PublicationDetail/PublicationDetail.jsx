import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPublication } from '../../../../data/firebase'
import { useLanguage } from '../../../../context/LanguageContext'
import PublicationDetailSkeleton from './Skeleton'

export default function PublicationDetail() {
    const { id } = useParams()
    const [publication, setPublication] = useState(null)
    const [loading, setLoading] = useState(true)
    const { t } = useLanguage()

    useEffect(() => {
        getPublication(id)
            .then(data => {
                setPublication(data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <PublicationDetailSkeleton />
    }

    const { title, subtitle, description, url } = publication

    return (
        <section className='w-full text-fg flex items-center justify-center'>
            <div className='w-full mt-3 flex flex-col justify-center items-center md:max-w-7xl md:p-6 bg-bg2/30 shadow-2xl border border-secondary/30 rounded-2xl'>
                <h1 className='title-text text-center text-fg mb-5'>{title}</h1>
                <h2 className='text-2xl mb-6'>{subtitle}</h2>
                <p className='text-lg'>{description}</p>
                <div className='mt-6'>
                    <a href={url} download className='inline-block  py-2 px-3 bg-primary/30 border border-secondary text-fg text-sm rounded-md mx-3 hover:bg-primary-hover transition-all'>
                        {t('publications.detail.download_pdf')}
                    </a>
                    <Link to='/publications' className='inline-block px-3 py-2 bg-fg/20 border border-secondary hover:bg-fg/10 text-fg text-sm rounded-md transition-all'>
                        {t('publications.detail.back')}
                    </Link>
                </div>
            </div>
        </section>
    )
}
