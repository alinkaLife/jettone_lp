import React from 'react'
import styles from './Advantages.module.css'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import Image from 'next/image'
import imageArea from '../../../assets/img/image-area-tablet.png'
import PeopleIcon from '../../../assets/icons/advantages/heroicons_user-group-20-solid.svg'
import { useTranslation } from 'next-i18next'

const Advantages = () => {
    const { t } = useTranslation();
    return (
        
        <section id="advantages">
            <div className='container'>

                <SectionTitle>
                    {t('advantages.title')}

                </SectionTitle>

                <div className={styles.advantage}>
                    <div className={styles.img__wrapper}>
                        <Image
                            src={imageArea}
                            alt='phone'
                        />
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item1')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item2')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item3')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item4')}
                            </p>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item5')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item6')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item7')}
                            </p>
                        </li>
                        <li className={styles.list__item}>
                            <Image
                                src={PeopleIcon}
                                alt='people icon'
                            />
                            <p>
                                {t('advantages.item8')}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Advantages