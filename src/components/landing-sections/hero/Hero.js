import styles from '../hero/Hero.module.css'
import Image from 'next/image'
import React from 'react'
import Button from '../../sharable/button/button'
import { useTranslation } from 'next-i18next'
import icon5 from '@/assets/hero/coin5.webp'
import icon1 from '@/assets/hero/coin1.webp'
import icon2 from '@/assets/hero/coin2.webp'
import icon3 from '@/assets/hero/coin3.webp'
import icon4 from '@/assets/hero/coin4.webp'

const Hero = ({ isMobileMenuOpen, handleModalOpen }) => {
    const { t } = useTranslation()

    const image = (
        <div
            style={isMobileMenuOpen ? { zIndex: '-1' } : { zIndex: 'auto' }}
            className={styles.image__block}
        >
            <Image
                id={'5'}
                className={[styles.img__five, 'animated'].join(' ')}
                priority={true}
                src={icon5}
                alt="coins icon"
                quality={100}
            />
            <Image
                id={'1'}
                className={[styles.img__one, 'animated__delay'].join(' ')}
                priority={true}
                src={icon1}
                alt="coins icon"
                quality={100}
            />
            <Image
                id={'2'}
                className={[styles.img__two, 'animated'].join(' ')}
                priority={true}
                src={icon2}
                alt="coins icon"
                quality={100}
            />
            <Image
                id={'3'}
                className={[styles.img__three, 'animated'].join(' ')}
                priority={true}
                src={icon3}
                alt="coins icon"
                quality={100}
            />
            <Image
                id={'4'}
                className={[styles.img__four, 'animated__delay'].join(' ')}
                priority={true}
                src={icon4}
                alt="coins icon"
                quality={100}
            />
        </div>
    )

    return (
        <section className={styles.hero__section} id="hero">
            <div className="container">
                <div className={styles.hero}>
                    <div className={styles.hero__wrapper}>
                        <div className={styles.hero__left}>
                            <h1 className={styles.title}>{t('hero.title')}</h1>
                            <h2 className={styles.description}>
                                {t('hero.description')}
                            </h2>
                            <div className={styles.img__wrapper}>{image}</div>
                            <Button onClick={handleModalOpen}>
                                {t('hero.btn')}
                            </Button>
                        </div>
                        <div className={styles.hero__right}>{image}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
