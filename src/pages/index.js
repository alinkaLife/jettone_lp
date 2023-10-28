import Hero from '../components/landing-sections/hero/Hero'
import Providers from '../components/landing-sections/providers/Providers'
import Faq from '../components/landing-sections/faq/Faq'
import RequestSection from '../components/landing-sections/request-section/RequestSection'
import Advantages from '../components/landing-sections/advantages/Advantages'
import Payment from '../components/landing-sections/payment/Payment'
import Promo from '../components/landing-sections/promo/Promo'
import Geo from '../components/landing-sections/geo/Geo'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '../../next-i18next.config'
import { useState } from 'react'

import RequestModal from '@/components/modal/RequestModal'
import Head from 'next/head'

function Home() {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)


    const handleToggleModal = () => setIsRequestModalOpen((prev) => !prev)
    return (
        <>
            <Head>
                <title>Партнерская программа JetTon</title>
            </Head>
            <Header
                handleModalOpen={handleToggleModal}
            />
            <main>
                <Hero
                    handleModalOpen={handleToggleModal}
                />
                <Advantages />
                <Payment />
                <Geo />
                <Promo />
                <Providers />
                <Faq />
                <RequestSection />
            </main>

            <Footer />

            <RequestModal
                handleToggleModal={handleToggleModal}
                isRequestModalOpen={isRequestModalOpen}
            />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const { locale } = ctx

    return {
        props: {
            ...(await serverSideTranslations(
                locale,
                ['common'],
                nextI18nextConfig
            )),
        },
    }
}

export default Home
