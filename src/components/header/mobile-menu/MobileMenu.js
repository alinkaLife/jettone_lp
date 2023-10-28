import React from 'react'
import styles from './MobileMenu.module.css'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MobileMenu = ({ handleClose, isOpen }) => {
    const router = useRouter()

    const { t } = useTranslation()

    const navList = [
        {
            id: 1,
            label: t('nav.about'),
            hash: 'hero',
            isActive: router.asPath.includes('hero') || router.asPath === '/',
        },
        {
            id: 2,
            label: t('nav.advantage'),
            hash: 'advantages',
            isActive: router.asPath.includes('advantages'),
        },
        {
            id: 3,
            label: t('nav.payment'),
            hash: 'payments',
            isActive: router.asPath.includes('payments'),
        },
        {
            id: 4,
            label: t('nav.promo'),
            hash: 'promo',
            isActive: router.asPath.includes('promo'),
        },
        {
            id: 5,
            label: t('nav.partners'),
            hash: 'partners',
            isActive: router.asPath.includes('partners'),
        },
        {
            id: 6,
            label: t('nav.faq'),
            hash: 'faq',
            isActive: router.asPath.includes('faq'),
        },
    ]

    return (
        <div
            className={[
                styles.menu,
                isOpen ? styles.menu__open : undefined,
            ].join(' ')}
        >
            <ul className={styles.menu__list}>
                {navList.map((nav) => (
                    <li key={nav.id}>
                        <Link
                            scroll={false}
                            className={[
                                nav.isActive ? styles.active : undefined,
                                styles.menu__item,
                            ].join(' ')}
                            onClick={handleClose}
                            href={`/#${nav.hash}`}
                        >
                            {nav.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu
