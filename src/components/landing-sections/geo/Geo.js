import React from 'react'
import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './Geo.module.css'
import Image from 'next/image'
import ru from '../../../assets/img/geo/ru.png'
import kz from '../../../assets/img/geo/kz.png'
import ua from '../../../assets/img/geo/ua.png'
import az from '../../../assets/img/geo/az.png'
import uz from '../../../assets/img/geo/uz.png'




const Geo = () => {
    return (
        <section>
            <div className='container'>
                <SectionTitle>ГЕО</SectionTitle>
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