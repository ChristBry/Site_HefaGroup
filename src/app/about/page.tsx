"use client"

import Image from "next/image"
import Stats from "@/components/sections/stats"
import NewsLetter from "@/components/sections/newsLetter"
import { motion } from 'motion/react'
import { useTranslation } from "react-i18next"
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion/variants"

type ValueItem = { title: string; description: string }

export default function About() {

    const { t } = useTranslation("about")
    const values = t('values.items', { returnObjects: true }) as ValueItem[]
    const valueClasses = ['trust', 'responsibility', 'global-presence', 'innovation']

    return (
        <div>
            <div className="space">

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'
            >
                <h1 className='text-[35px] font-bold'>
                    {t('title')}
                </h1>
                <div className="line" />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="intro-part flex flex-col sm:flex-row sm:items-center gap-6"
            >
                <motion.h2 variants={fadeUp} className="text-xl lg:text-[30px] sm:border-r-4">{t('intro.heading')}</motion.h2>
                <motion.p variants={fadeUp} className="text-[18px]">{t('intro.paragraph')}</motion.p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="about-part flex flex-col lg:flex-row-reverse items-center gap-6"
            >
                <div className="about-container">
                    <h4 className='w-60 text-center rounded-full'>{t('about.tag')}</h4>
                    <h2 className='font-bold text-2xl sm:text-[24px]'>{t('about.title')}</h2>
                    <Image src="/images/about.webp" alt='about' width={1107} height={738} className='about-img sm:hidden w-[100%] sm:w-[60%] h-[20%] lg:w-[40%] xl:w-[35%]' />
                    <div className="flex flex-col gap-5">
                        <p className="text-justify text-[18px]">{t('about.paragraph1')}</p>
                        <p className="text-justify text-[18px]">{t('about.paragraph2')}</p>
                    </div>
                </div>
                <Image src="/images/about.webp" alt='about' width={1107} height={738} className='about-img hidden sm:block w-[100%] sm:w-[60%] h-[20%] lg:w-[40%] xl:w-[35%]' />
            </motion.div>
            <div className="values-part flex flex-col items-center gap-4 h-[600px] sm:h-[700px] lg:h-[500px]">
                <h1 className="text-4xl text-white">{t('values.title')}</h1>
                <div className="line bg-white"></div>
                <p className="description text-justify w-[90%] xl:text-center text-[18px] sm:w-[70%] text-white">{t('values.description')}
                </p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="values-container w-[90%] sm:w-[80%] absolute flex flex-col items-center gap-8 lg:flex-row lg:items-center bg-white"
                >
                    <motion.div
                        variants={staggerContainer}
                        className="values sm:w-[80%] grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div key={index} variants={fadeUp} className={valueClasses[index]}>
                                <h4 className="text-[24px] font-semibold">{value.title}</h4>
                                <p className="text-[16px]">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <Image src="/images/vision1.webp" alt="value" width={979} height={574} className="hidden sm:block w-[100%] sm:w-[60%] h-[100px] sm:h-[400px] lg:w-[400px] xl:w-[1000px]" />
                    </motion.div>
                </motion.div>
            </div>
            <div className="stats-part">
                <Stats />
            </div>
            <NewsLetter />
        </div>
    )
}
