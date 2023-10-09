import styles from '../hero/Hero.module.css';
import Image from 'next/image'
import coinImage from '../../../assets/img/coin-image.webp'
import React from 'react'
import Button from '../../sharable/button/button';
import { useTranslation } from 'next-i18next'

const Hero = ({ handleModalOpen }) => {
    const image = (
        <Image
            priority={true}
            src={coinImage}
            alt='Five coins'
            quality={100}
            sizes="240px, (max-width: 744px) 342px, (max-width: 1300px) 550px"
        />
    )
    const { t } = useTranslation();

    return (
        <section className={styles.hero__section} id='hero'>
            <div className='container'>
                <div className={styles.hero}>
                    <div className={styles.hero__wrapper}>
                        <div className={styles.hero__left}>
                            <h1 className={styles.title}>
                                {t('hero.title')}
                            </h1>
                            <h2 className={styles.description}>
                                {t('hero.description')}
                            </h2>
                            <div className={styles.img__wrapper}>
                                {image}
                            </div>
                            <Button onClick={handleModalOpen}>
                                {t('hero.btn')}
                            </Button>
                        </div>
                        <div className={styles.hero__right}>
                            {image}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero