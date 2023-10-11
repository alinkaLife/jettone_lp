import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Payment.module.css'
import Image from 'next/image'
import Dollar from '../../../assets/icons/payments/profit.svg'
import Zondicons from '../../../assets/icons/payments/zondicons_network.svg'
import Hero from '../../../assets/icons/payments/heroicons_user-group-20-solid.svg'
import Solar from '../../../assets/icons/payments/solar_share-bold.svg'
import { useTranslation } from 'next-i18next'

import React from 'react'

const Payment = () => {
    const { t } = useTranslation()

    return (
        <section id="payments">
            <div className="container">
                <SectionTitle>{t('payments.title')}</SectionTitle>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.text}>
                            {t('payments.title1')}
                        </div>
                        <div className={styles.delivery}>
                            {t('payments.soon')}
                        </div>
                    </li>
                    <li className={[styles.item, styles.center].join(' ')}>
                        <div className={styles.text}>
                            {t('payments.title2')}
                        </div>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.text}>
                            {t('payments.title3')}
                        </div>
                        <div className={styles.delivery}>
                            {t('payments.soon')}
                        </div>
                    </li>
                </ul>
                <h3 className={styles.section__subtitle}>
                    {t('payments.subtitle1')}
                    <span>{` ${t('payments.subtitle2')} `}</span>
                    {t('payments.subtitle3')}
                </h3>
                <ul className={styles.payment__list}>
                    <li className={styles.payment__item}>
                        <Image src={Dollar} alt="dollar" />
                        <p>{t('payments.item1')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Zondicons} alt="zondicons" />
                        <p>{t('payments.item2')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Hero} alt="hero" />
                        <p>{t('payments.item3')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Solar} alt="solar" />
                        <p>{t('payments.item4')}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Payment
