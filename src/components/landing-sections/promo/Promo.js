import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Promo.module.css'
import Image from 'next/image'
import React from 'react'
import Picture from '../../../assets/icons/promo/icon1.svg'
import Picture1 from '../../../assets/icons/promo/icon2.svg'
import Picture2 from '../../../assets/icons/promo/icon3.svg'
import Picture3 from '../../../assets/icons/promo/icon4.svg'
import Picture4 from '../../../assets/icons/promo/icon5.svg'
import Picture5 from '../../../assets/icons/promo/icon6.svg'
import Picture6 from '../../../assets/icons/promo/icon7.svg'
import Picture7 from '../../../assets/icons/promo/icon8.svg'
import Img from '../../../assets/img/promo-image.webp'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

const Promo = () => {
    const { t } = useTranslation();

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
        <section className={styles.promo} id='promo'>
            <div className='container'>
                <SectionTitle>
                    {t('promo.title')}
                </SectionTitle>
                <p className={styles.text}>
                    {t('promo.text')}
                </p>
                <div className={styles.main}>
                    <ul className={styles.list}>
                        {promoList.map((el, id) => {
                            return (
                                <li key={`promo-${id}`} className={styles.item}>
                                    <Image
                                        src={el.icon}
                                        alt='promo icon'
                                    />
                                    <span>
                                        {el.text}
                                    </span>
                                </li>
                            )
                        })}

                    </ul>
                    <div className={styles.main__right}>
                        <div className={styles.image}>
                            <motion.div
                                initial={{ y: 180 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                viewport={{ margin: '-40px' }}

                            >
                                <Image
                                    src={Img}
                                    alt='tablet'
                                    quality={100}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Promo