import React from 'react'
import styles from './DesktopLangSwitcher.module.css'
import { useRouter } from 'next/router'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Arrow from '../../../assets/icons/arrow.svg'
import Image from 'next/image'

const DesktopLangSwitcher = () => {
    const router = useRouter()

    const handleChange = (event) => {
        router.push('/', '/', { locale: event.target.value })
    }

    const CustiomIcon = (props) => <Image {...props} src={Arrow} priority={true} alt='arrow' />

    const languageList = router.locales.map(locale => {
        return <MenuItem className={styles.option} key={locale} value={locale}>
            {locale.toUpperCase()}
        </MenuItem>
    })

    return (
        <Select
            IconComponent={CustiomIcon}
            className={styles.lang}
            value={router.locale}
            onChange={handleChange}
        >
            {languageList}
        </Select>
    )
}

export default DesktopLangSwitcher