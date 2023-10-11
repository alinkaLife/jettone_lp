import SectionTitle from '../../sharable/section-title/SectionTitle'
import styles from './RequestSection.module.css'
import Image from 'next/image'
import imageForm from '../../../assets/img/form-image.webp'
import { useTranslation } from 'next-i18next'

import React from 'react'
import Form from '@/components/sharable/form/Form'
import { motion } from "framer-motion"

const RequestSection = () => {
    const { t } = useTranslation();
    const title = <SectionTitle>
        {t('request.title')}
    </SectionTitle>

    return (
        <section id="advantages">
            <div className='container'>
                <div className={styles.main}>
                    <div className={styles.isHidden}>
                        {title}
                    </div>

                    <div className={styles.main__wrapper}>

                        <div className={styles.img__wrapper}>
                            <motion.div
                                initial={{ y: 180 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                viewport={{ margin: '-40px' }}

                            >
                                <Image
                                    src={imageForm}
                                    alt='phoneImage'
                                    quality={100}
                                />
                            </motion.div>
                        </div>
                        <div className={styles.form__block}>
                            <div className={styles.isVisibleOnTablet}>
                                {title}
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default RequestSection