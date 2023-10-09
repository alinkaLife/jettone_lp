import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Faq.module.css'
import React from 'react'
import Expandable from '../../sharable/expandable-list/expandable'
import { useTranslation } from 'next-i18next'

const Faq = () => {
    const { t } = useTranslation();

    const faqList = [
        {
            id: 1,
            title:  t('faq.title1'),
            description: t('faq.description1')
        },
        {
            id: 2,
            title: t('faq.title2'),
            description: t('faq.description2')

        },
        {
            id: 3,
            title: t('faq.title3'),
            description: t('faq.description3')
        },
        {
            id: 4,
            title: t('faq.title4'),
            description: t('faq.description4')

        },
        {
            id: 5,
            title: t('faq.title5'),
            description: t('faq.description5')
        },
    ]
    return (
        <section id='faq'>
            <div className='container'>
                <SectionTitle>F.A.Q.</SectionTitle>
                <ul className={styles.list}>
                    {
                        faqList.map(el => {
                            return (
                                <Expandable
                                    key={el.id}
                                    title={el.title}
                                    description={el?.description}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Faq