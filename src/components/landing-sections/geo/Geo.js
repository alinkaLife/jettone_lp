import React from 'react'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Geo.module.css'
import Image from 'next/image'
import ru from '../../../assets/icons/geo/1.png'
import kz from '../../../assets/icons/geo/2.png'
import ua from '../../../assets/icons/geo/3.png'
import az from '../../../assets/icons/geo/4.png'
import uz from '../../../assets/icons/geo/5.png'
import { useTranslation } from 'next-i18next'
import Map from '../../../assets/icons/map.svg'

const Geo = () => {
    const { t } = useTranslation()
    return (
        <section className={styles.geo}>
            <div className="container">
                <SectionTitle title={t('geo')} />

                <div className={styles.geo_list_wrapper}>
                    <Image className={styles.map} src={Map} />
                    <ul className={styles.list}>
                        <li>
                            <Image src={ru} alt="flag of russia" />
                            <p>RU</p>
                        </li>
                        <li>
                            <Image src={kz} alt="flag of kazakhstan" />
                            <p>KZ</p>
                        </li>
                        <li>
                            <Image src={ua} alt="flag of ukraine" />
                            <p>UA</p>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li>
                            <Image src={az} alt="flag of azerbaijan" />
                            <p>AZ</p>
                        </li>
                        <li>
                            <Image src={uz} alt="flag of uzbekistan" />
                            <p>UZ</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Geo
