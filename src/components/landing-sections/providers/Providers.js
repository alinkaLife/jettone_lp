import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Providers.module.css'
import Provider1 from '../../../assets/icons/providers/1.svg'
import Provider2 from '../../../assets/icons/providers/2.svg'
import Provider3 from '../../../assets/icons/providers/3.svg'
import Provider4 from '../../../assets/icons/providers/4.svg'
import Provider5 from '../../../assets/icons/providers/5.svg'
import Provider6 from '../../../assets/icons/providers/6.svg'
import Provider7 from '../../../assets/icons/providers/7.svg'
import Provider8 from '../../../assets/icons/providers/8.svg'
import Provider9 from '../../../assets/icons/providers/9.svg'
import Provider10 from '../../../assets/icons/providers/10.svg'
import Provider11 from '../../../assets/icons/providers/11.svg'
import Provider12 from '../../../assets/icons/providers/12.svg'
import Provider13 from '../../../assets/icons/providers/13.svg'
import Provider14 from '../../../assets/icons/providers/14.svg'
import Provider15 from '../../../assets/icons/providers/15.svg'
import { useTranslation } from 'next-i18next'

const alt = 'logo of the partner'
const providersList = [
    { id: 1, img: Provider1, alt },
    { id: 2, img: Provider2, alt },
    { id: 3, img: Provider3, alt },
    { id: 4, img: Provider4, alt },
    { id: 5, img: Provider5, alt },
    { id: 6, img: Provider6, alt },
    { id: 7, img: Provider7, alt },
    { id: 8, img: Provider8, alt },
    { id: 9, img: Provider9, alt },
    { id: 10, img: Provider10, alt },
    { id: 11, img: Provider11, alt },
    { id: 12, img: Provider12, alt },
    { id: 13, img: Provider13, alt },
    { id: 14, img: Provider14, alt },
    { id: 15, img: Provider15, alt },
]

const Providers = () => {
    const { t } = useTranslation()
    return (
        <section className={styles.providers__section} id="partners">
            <div className="container">
                <SectionTitle
                    title={t('provider.title')}
                    topTitle={'Partners'}
                />

                <ul className={styles.list}>
                    {providersList.map((provider) => {
                        return (
                            <li key={provider.id} className={styles.item}>
                                <Image
                                    className={styles.img}
                                    src={provider.img}
                                    alt={provider.alt}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Providers
