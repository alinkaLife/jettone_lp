import React from 'react'
import styles from './Advantages.module.css'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import imageArea from '../../../assets/img/why-image.png'


import PeopleIcon1 from '../../../assets/icons/advantages/1.svg'
import PeopleIcon2 from '../../../assets/icons/advantages/2.svg'
import PeopleIcon3 from '../../../assets/icons/advantages/3.svg'
import PeopleIcon4 from '../../../assets/icons/advantages/4.svg'
import PeopleIcon5 from '../../../assets/icons/advantages/5.svg'
import PeopleIcon6 from '../../../assets/icons/advantages/6.svg'
import PeopleIcon7 from '../../../assets/icons/advantages/7.svg'
import PeopleIcon8 from '../../../assets/icons/advantages/8.svg'
import AnimatedImage from '@/components/sharable/animated-image/AnimatedImage'

const Advantages = () => {
    const { t } = useTranslation()

    return (
        <section className={styles.advantages} id="advantages">
            <div className="container">
                <SectionTitle
                    title={t('advantages.title')}
                    topTitle={'Advantages'}
                />

                <div className={styles.advantage}>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon1} alt="people icon" />
                            <p>{t('advantages.item1')}</p>
                        </li>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon2} alt="people icon" />
                            <p>{t('advantages.item2')}</p>
                        </li>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon3} alt="people icon" />
                            <p>{t('advantages.item3')}</p>
                        </li>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon4} alt="people icon" />
                            <p>{t('advantages.item4')}</p>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon5} alt="people icon" />
                            <p>{t('advantages.item5')}</p>
                        </li>
                        <li className={styles.list__item}>
                            <Image src={PeopleIcon6} alt="people icon" />
                            <p>{t('advantages.item6')}</p>
                        </li>
                        <li
                            className={[
                                styles.list__item,
                            ].join(' ')}
                        >
                            <Image src={PeopleIcon7} alt="people icon" />
                            <p>{t('advantages.item7')}</p>
                        </li>
                        <li
                            className={[
                                styles.list__item,
                            ].join(' ')}
                        >
                            <Image src={PeopleIcon8} alt="people icon" />
                            <p>{t('advantages.item8')}</p>
                        </li>
                    </ul>
                    <div className={styles.img__wrapper}>
                        <AnimatedImage>
                            <Image
                                src={imageArea}
                                alt="phone"
                                quality={100}
                                sizes="(max-width: 744px) 100vw, (max-width: 1300px) 50vw, 33vw"
                            />
                        </AnimatedImage>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
