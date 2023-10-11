import React from 'react'
import SectionTitle from '@/components/sharable/section-title/SectionTitle'
import Form from '@/components/sharable/form/Form'
import Modal from '@mui/material/Modal'
import styles from './RequestModal.module.css'
import Image from 'next/image'
import CloseIcon from '@/assets/icons/burger_menu_close.svg'
import { useTranslation } from 'next-i18next'

const RequestModal = ({ handleToggleModal, isRequestModalOpen }) => {
    const { t } = useTranslation()

    return (
        <Modal className={styles.modal} open={isRequestModalOpen}>
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__content}>
                    <Image
                        className={styles.close}
                        onClick={handleToggleModal}
                        src={CloseIcon}
                        alt="close icon"
                    />

                    <SectionTitle>{t('call-to-action')}</SectionTitle>
                    <Form
                        onFormSubmit={() => {
                            handleToggleModal()
                        }}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default RequestModal
