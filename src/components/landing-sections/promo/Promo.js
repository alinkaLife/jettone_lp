import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Promo.module.css'
import Image from 'next/image'
import React from 'react'
import Picture from '../../../assets/icons/promo/1.svg'
import Picture1 from '../../../assets/icons/promo/2.svg'
import Picture2 from '../../../assets/icons/promo/3.svg'
import Picture3 from '../../../assets/icons/promo/4.svg'
import Picture4 from '../../../assets/icons/promo/5.svg'
import Picture5 from '../../../assets/icons/promo/6.svg'
import Picture6 from '../../../assets/icons/promo/7.svg'
import Picture7 from '../../../assets/icons/promo/8.svg'
import Img from '../../../assets/img/promo-image.webp'
import { useTranslation } from 'next-i18next'
import AnimatedImage from '@/components/sharable/animated-image/AnimatedImage'

const Promo = () => {
    const { t } = useTranslation()

    const promoList = [
        { text: t('promo.item1'), icon: Picture },
        { text: t('promo.item2'), icon: Picture1 },
        { text: t('promo.item3'), icon: Picture2 },
        { text: t('promo.item4'), icon: Picture3 },
        { text: t('promo.item5'), icon: Picture4 },
        { text: t('promo.item6'), icon: Picture5 },
        { text: t('promo.item7'), icon: Picture6 },
        { text: t('promo.item8'), icon: Picture7 },
    ]

    return (
        <section className={styles.promo} id="promo">
            <div className="container">
                <SectionTitle
                    title={'Boost Earnings with Our Affiliate Program!'}
                    topTitle={'Promo '}
                />

                <p className={styles.text}>{t('promo.text')}</p>
                <div className={styles.main}>
                    <ul className={styles.list}>
                        {promoList.map((el, id) => {
                            return (
                                <li key={`promo-${id}`} className={styles.item}>
                                    <div className={styles.image_wrapper}>
                                        <Image src={el.icon} alt="promo icon" />
                                    </div>
                                    <span className={styles.textItem}>{el.text}</span>
                                </li>
                            )
                        })}
                    </ul>
                   
                </div>
            </div>
        </section>
    )
}
export default Promo
