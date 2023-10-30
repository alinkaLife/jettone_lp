import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Payment.module.css'
import Image from 'next/image'
import Dollar from '../../../assets/icons/payment_advantages/1.svg'
import Zondicons from '../../../assets/icons/payment_advantages/2.svg'
import Hero from '../../../assets/icons/payment_advantages/3.svg'
import Solar from '../../../assets/icons/payment_advantages/4.svg'
import { useTranslation } from 'next-i18next'

import React from 'react'

const Payment = () => {
    const { t } = useTranslation()

    return (
        <section className={styles.payment__section} id="payments">
            <div className="container">
                <SectionTitle
                    title={t('payments.title')}
                    topTitle={'Payment Models '}
                />
                <ul className={styles.main__list}>
                    <li
                        className={[
                            styles.main__list_item,
                            styles.main__list_item_second,
                        ].join(' ')}
                    >
                        <h4 className={styles.text}>RevShare 50%</h4>
                        {/* <p className={styles.about}>{t('payment.model3')}</p> */}
                    </li>
                    <li className={styles.main__list_item}>
                        <div className={styles.when}>coming soon</div>
                        <h4 className={styles.text}>CPA</h4>
                        {/* <p className={styles.about}>{t('payment.model2')}</p> */}
                    </li>
                    <li
                        className={[
                            styles.main__list_item,
                            styles.main__list_item_last,
                        ].join(' ')}
                    >
                        <div className={styles.when}>coming soon</div>
                        <h4 className={styles.text}>Hybrid</h4>
                        {/* <p className={styles.about}>{t('payment.model1')}</p> */}
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
                        <p className={styles.wow}>{t('payments.item1')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Zondicons} alt="zondicons" />
                        <p className={styles.wow}>{t('payments.item2')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Hero} alt="hero" />
                        <p className={styles.wow}>{t('payments.item4')}</p>
                    </li>
                    <li className={styles.payment__item}>
                        <Image src={Solar} alt="solar" />
                        <p className={styles.wow}>{t('payments.item3')}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Payment
