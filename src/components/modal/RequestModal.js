import React from 'react'
import SectionTitle from '@/components/sharable/section-title/SectionTitle'
import Form from '@/components/sharable/form/Form'
import Modal from '@mui/material/Modal'
import styles from './RequestModal.module.css'
import Image from 'next/image'
import CloseIcon from '@/assets/icons/hamburger_open.svg'
import { useTranslation } from 'next-i18next'
import Fade from '@mui/material/Fade'

const RequestModal = ({ handleToggleModal, isRequestModalOpen }) => {
    const { t } = useTranslation()

    return (
        <Modal
            onClose={handleToggleModal}
            className={styles.modal}
            open={isRequestModalOpen}
        >
            <Fade  in={isRequestModalOpen}>
                <div className={styles.modal__wrapper}>
                    <div className={styles.modal__content}>
                        <Image
                            className={styles.close}
                            onClick={handleToggleModal}
                            src={CloseIcon}
                            alt="close icon"
                        />

                        <SectionTitle title={t('call-to-action')} />
                        <Form
                            onFormSubmit={() => {
                                handleToggleModal()
                            }}
                        />
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default RequestModal
