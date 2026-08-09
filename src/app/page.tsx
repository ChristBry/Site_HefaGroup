"use client"

import Image from "next/image"
import Link from "next/link"
import Stats from "@/components/sections/stats"
import NewsLetter from "@/components/sections/newsLetter"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion/variants"
type ServiceItem = { title: string; description: string }
type ReasonItem = { title: string; description: string }
type FaqItem = { question: string; answer: string }

export default function Home() {

    const { t } = useTranslation("home")
    const { t: tc } = useTranslation("common")
    const { t: tb } = useTranslation("blog")

    const services = t('services.items', { returnObjects: true }) as ServiceItem[]
    const reasons = t('why.reasons', { returnObjects: true }) as ReasonItem[]
    const faqs = t('faq.items', { returnObjects: true }) as FaqItem[]
    const serviceIcons = ['fa-business-time', 'fa-building', 'fa-users', 'fa-user-pen']

    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className='home'>

            <div>
                <div className="space">

                </div>
                <div className='banner '>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className='business text-sm sm:text-lg w-[70%] sm:w-80 font-semibold text-center rounded-full'>{t('banner.tag')}</p>
                        <h1 className='text-3xl font-bold'>{t('banner.title')}</h1>
                        <p className='description text-sm w-[90%] sm:w-[70%]'>{t('banner.description')}</p>
                        <div className='banner-contact w-[70%] sm:w-80 flex items-center justify-center rounded-full'>
                            <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>{tc('actions.appointment')}<i className="fa-brands fa-whatsapp text-3xl"></i></a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="about flex flex-col lg:flex-row-reverse items-center"
            >
                <div className="about-container">
                    <h4 className='w-50 text-center rounded-full'>{t('about.tag')}</h4>
                    <h2 className='font-bold text-xl sm:text-3xl'>{t('about.title')}</h2>
                    <p className='text-justify text-lg'>{t('about.paragraph1')}</p>
                    <h2 className='text-2xl sm:text-2xl'>{t('about.visionTitle')}</h2>

                    <p className='text-justify text-lg'>{t('about.paragraph2')}</p>
                </div>
                <Image src="/images/vision1.webp" alt='about' width={979} height={574} className='about-img hover:scale-105 transition-all duration-300 w-[100%] h-[320px] sm:w-[60%] sm:h-[400px] lg:w-[400px] xl:w-[1200px]' />
            </motion.div>

            <div className='service-part relative flex flex-col items-center'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className='service-description flex flex-col items-center'
                >
                    <h4 className='rounded-full w-50 text-center'>{t('services.tag')}</h4>
                    <h2 className='text-center text-2xl sm:text-4xl font-bold'>{t('services.title')}</h2>
                    <p className='text-center text-xl'>{t('services.description')}</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className='services-list grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-15'
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            className={`service ${index % 2 !== 0 ? 'service-2' : ''} sm:w-[600px] h-[800px] ${index < 2 ? 'max-h-[420px] sm:max-h-[370px]' : 'max-h-[420px] sm:max-h-[340px]'} flex cursor-pointer flex-col-reverse sm:flex-row justify-center items-center sm:items-start rounded-xl`}
                        >
                            <div className=''>
                                <h4 className='text-center sm:text-left font-bold'>{service.title}</h4>
                                <p className='text-2xl text-left sm:text-justify'>{service.description}</p>
                            </div>
                            <i className={`fa-solid ${serviceIcons[index]} text-6xl sm:text-8xl`}></i>
                        </motion.div>
                    ))}
                </motion.div>
                <Link href='/services' className='allservice-button flex items-center justify-center rounded-full w-[220px] text-center text-xl'>{t('services.cta')}</Link>
            </div>

            <div className="choose-part relative flex items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeIn}>
                    <Image src="/images/why.webp" alt='why' width={660} height={690} className='hidden sm:flex sm:w-[450px]' />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="choose-container sm:w-[80%]"
                >
                    <motion.h4 variants={fadeUp} className='w-60 text-center rounded-full'>{t('why.tag')}</motion.h4>
                    <motion.h2 variants={fadeUp} className='font-bold text-2xl lg:text-3xl'>{t('why.title')}</motion.h2>
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            variants={fadeUp}
                            className='reason max-w-[700px] sm:w-[100%] flex flex-col gap-2 rounded-xl'
                        >
                            <div className='reason-label flex items-center'>
                                <h1 className='text-4xl lg:text-[34px]'>0{index + 1}-</h1>
                                <h5 className='text-2xl lg:text-[28px]'>{reason.title}</h5>
                            </div>
                            <p className='text-justify text-var[(--text-black-100)] text-lg'>{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <Stats />

            <div className="team flex flex-col sm:flex-row">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className='team-container sm:w-[80%] xl:w-[50%]'
                >
                    <h4 className='w-50 text-center rounded-full'>{t('team.tag')}</h4>
                    <h2 className='font-bold text-3xl'>{t('team.title')}</h2>
                    <p className='text-justify text-lg'>{t('team.description')}</p>
                    <iframe
                        src={`https://youtube.com/embed/Y34uqCIaHQU?si=ltMDfZmzkL7hsedf`}
                        title="YouTube Video"
                        className='video-youtube w-[100%] h-[280px] sm:w-[800px] sm:h-[400px]'
                        allowFullScreen
                    />
                    <div className='team-button hidden sm:flex w-[220px] rounded-full items-center justify-center'>
                        <Link href='/about' className='text-center'>{tc('actions.seeAll')}</Link>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="team-image"
                >
                    <div className='team-info absolute flex flex-col items-center w-50 sm:w-60 rounded-xl'>
                        <h4 className='text-sm sm:text-lg'>{t('team.memberName')}</h4>
                        <h5 className='text-sm font-bold'>{t('team.memberRole')}</h5>
                        <ul className='team-social flex gap-6'>
                            <li><a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] facebook flex items-center justify-center" aria-label='Facebook'><i className="fa-brands fa-facebook-f text-sm sm:text-lg"></i></a></li>
                            <li><a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] instagram flex items-center justify-center" aria-label='Instagram'><i className="fa-brands fa-instagram text-sm sm:text-lg"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] linkedin flex items-center justify-center" aria-label='LinkedIn'><i className="fa-brands fa-linkedin-in text-sm sm:text-lg"></i></a></li>
                        </ul>
                    </div>
                    <Image
                        src="/images/fadi.webp"
                        alt='Fadimatou'
                        width={720}
                        height={725}
                        className='flex justify-center rounded-xl w-[85%] sm:w-[350px] ' />
                </motion.div>
                <div className='team-button flex sm:hidden w-[50%] rounded-full items-center justify-center text-center'>
                    <Link href='/' className=''>{tc('actions.seeAll')}</Link>
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="plus-part flex flex-col items-center"
            >
                <h1 className='text-center text-2xl sm:text-5xl'>{t('plus.title')}</h1>
                <p className='text-cente text-lg sm:w-[70%] sm:text-xl'>{t('plus.description')}</p>
                <a className="plus-button rounded-full text-center w-[200px]" href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank'>{tc('actions.getInTouch')}</a>
            </motion.div>

            <div className="news-part flex flex-col lg:flex-row-reverse">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className='news-header'
                >
                    <h4 className='w-60 text-center rounded-full'>{t('articles.tag')}</h4>
                    <h2 className='font-bold text-3xl'>{t('articles.title')}</h2>
                    <p className='text-lg'>{t('articles.description')}</p>
                    <div className="news-button hidden lg:flex w-35 text-center rounded-full">
                        <Link href='/news' className='text-lg w-30'>{tc('actions.viewMore')}</Link>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className='news-container flex flex-col sm:flex-row gap-10'
                >
                    <motion.div variants={fadeUp} className="news w-90">
                        <Link href='/news/Unlocking-Your-Company-s-Potential' className=''>
                            <h4 className='absolute rounded-xl text-[12px]'>{tb('posts.Unlocking-Your-Company-s-Potential.category')}</h4>
                            <Image src="/images/news2.webp" alt="News" width={1800} height={942} className='rounded-lg sm:hover:scale-105 transition-all duration-300' />
                        </Link>
                        <h5 className='text-[20px] font-bold'>{tb('posts.Unlocking-Your-Company-s-Potential.cardTitle')}</h5>
                        <p className='text-justify text-[16px]'>{tb('posts.Unlocking-Your-Company-s-Potential.cardExcerpt')}</p>
                        <Link href='/news/Unlocking-Your-Company-s-Potential' className='button-news text-[16px]'>{tc('actions.readMore')}</Link>
                    </motion.div>
                    <motion.div variants={fadeUp} className="news w-90">
                        <Link href='/news/SAATM' className=''>
                            <h4 className='absolute rounded-xl text-[12px]'>{tb('posts.SAATM.category')}</h4>
                            <Image src="/images/saatm.webp" alt="News" width={756} height={426} className='rounded-lg h-[170px] sm:hover:scale-105 transition-all duration-300' />
                        </Link>
                        <h5 className='text-[20px] font-bold'>{tb('posts.SAATM.cardTitle')}</h5>
                        <p className='text-justify text-[16px]'>{tb('posts.SAATM.cardExcerpt')}</p>
                        <Link href='/news/SAATM' className='button-news text-[16px]'>{tc('actions.readMore')}</Link>
                    </motion.div>
                </motion.div>
                <div className="news-button flex lg:hidden w-40 text-center rounded-full">
                    <Link href='/news' className=' w-30'>{tc('actions.viewMore')}</Link>
                </div>
            </div>

            <div className="faq-part flex">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="faq-container w-[500px] xl:w-[60%]"
                >
                    <motion.h4 variants={fadeUp} className='w-30 text-center rounded-full'>{t('faq.tag')}</motion.h4>
                    <motion.h2 variants={fadeUp} className='font-bold text-2xl lg:text-3xl'>{t('faq.title')}</motion.h2>
                    <motion.p variants={fadeUp} className='text-justify text-lg'>{t('faq.description')}</motion.p>
                    <div className='faq-list flex flex-col gap-2'>
                        {faqs.map((faq, index) => (
                            <motion.div key={faq.question} variants={fadeUp} className='faq sm:w-[100%] lg:w-[85%]'>
                                <div
                                    className='faq-header flex items-center justify-between rounded-xl cursor-pointer'
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <h5 className='text-lg sm:text-xl'>{faq.question}</h5>
                                    <motion.i
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="fa-solid fa-chevron-down text-xl"
                                    ></motion.i>
                                </div>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            className='overflow-hidden'
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <p className='text-justify text-lg'>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeIn}
                    className="faq-image hidden sm:flex"
                >
                    <Image src="/images/why.png" alt='FAQ' width={1000} height={1440} className='w-[500px] h-[500px] rounded-2xl object-cover' />
                </motion.div>
            </div>
            <NewsLetter />
        </div>
    )
}
