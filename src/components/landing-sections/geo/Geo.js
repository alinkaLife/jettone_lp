import React from 'react'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Geo.module.css'
import Image from 'next/image'
import ru from '../../../assets/icons/geo/ru.svg'
import kz from '../../../assets/icons/geo/kz.svg'
import ua from '../../../assets/icons/geo/ua.svg'
import az from '../../../assets/icons/geo/az.svg'
import uz from '../../../assets/icons/geo/uz.svg'
import { useTranslation } from 'next-i18next'

const Geo = () => {
    const { t } = useTranslation()
    return (
        <section className={styles.geo}>
            <div className='container'>
                <SectionTitle>{t('geo')}</SectionTitle>
                <ul className={styles.list}>
                    <li>
                        <Image
                            src={ru}
                            alt='flag of russia'
                        />
                        <p>RU</p>
                    </li>
                    <li>
                        <Image
                            src={kz}
                            alt='flag of kazakhstan'
                        />
                        <p>KZ</p>
                    </li>
                    <li>
                        <Image
                            src={ua}
                            alt='flag of ukraine'
                        />
                        <p>UA</p>
                    </li>
                    <li>
                        <Image
                            src={az}
                            alt='flag of azerbaijan'
                        />
                        <p>AZ</p>
                    </li>
                    <li>
                        <Image
                            src={uz}
                            alt='flag of uzbekistan'
                        />
                        <p>UZ</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Geo