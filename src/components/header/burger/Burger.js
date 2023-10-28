import React from 'react'
import Image from 'next/image'
import Open from '@/assets/icons/hamburger_open.svg'
import Closed from '@/assets/icons/hamburger_closed.svg'
import styles from './Burger.module.css'

const Burger = ({ isOpen, handleOpen }) => {
    return (
        <button onClick={handleOpen} className={styles.burger}>
            <Image src={isOpen ? Open : Closed} alt="menu open" />
        </button>
    )
}

export default Burger
