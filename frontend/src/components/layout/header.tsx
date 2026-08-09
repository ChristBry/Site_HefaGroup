"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"

const Header = () => {
    const [open, setOpen] = useState(false)
    const navBar = useRef<HTMLUListElement>(null)
    const pathname = usePathname()
    const { t } = useTranslation("common")
    const menuItems = [
        { to: '/', label: t('nav.home') },
        { to: '/about', label: t('nav.about') },
        { to: '/services', label: t('nav.services') },
        { to: '/news', label: t('nav.news') },
        { to: '/contact', label: t('nav.contact') }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const headerContainer = document.querySelector('.infos-header-container');
            if (!headerContainer) return;
            const scrollPosition = window.scrollY;
            headerContainer.classList.toggle('scrolled', scrollPosition > 0);
            setOpen(false)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="header fixed z-20">
            <div className='infos-header-container flex justify-between items-center p-4'>
                <div className="infos-header-title w-[100%] sm:flex sm:gap-2 xl:gap-10">
                    <p><i className="fa-solid fa-envelope"></i>{t('topbar.email')}</p>
                    <p><i className="fa-solid fa-phone"></i>{t('topbar.phone')}</p>
                    <p><i className="fa-solid fa-location-dot"></i>{t('topbar.location')}</p>
                </div>
                <div className="infos-header-social w-[30%] h-[40px] flex justify-end items-center gap-2">
                    <a href="https://www.facebook.com/hefagroupsarl" target="_blank" className="hidden sm:flex border border-white flex justify-center items-center rounded-full w-[40px] facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/hefagroups" target="_blank" className="hidden sm:flex border border-white flex justify-center items-center rounded-full w-[40px] instagram" aria-label="Instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/company/hefagroup-partners" target="_blank" className="hidden sm:flex border border-white flex justify-center items-center rounded-full w-[40px] linkedin" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                    <LanguageSwitcher />
                </div>
            </div>
            <div className="nav shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="logo w-[40%] sm:w-[20%]">
                        <Link href='/'><Image src="/images/logo.webp" alt="logo" width={2919} height={808} className="mx-auto" priority /></Link>
                    </div>
                    <div className="nav-bar flex lg:hidden" onClick={() => setOpen(!open)}>
                        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-3xl transition-transform`}></i>
                    </div>
                    <ul className="nav-list hidden lg:flex sm:w-[100%] flex justify-center sm:gap-3 xl:gap-8" ref={navBar}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={`text-xl ${pathname === item.to || (item.to === '/news' && pathname.startsWith('/news/')) ? 'active' : ''}`}>
                                <Link href={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='header-action hidden w-[70%] sm:w-[35%] xl:w-[20%] lg:flex items-center justify-center rounded-full'>
                        <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='hidden flex items-center'>{t('actions.contactUs')}</a>
                    </div>
                </div>
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            className="nav-mobile overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <ul className="w-[50%] flex flex-col gap-2">
                                {menuItems.map((item, index) => (
                                    <li key={index} className={`text-xl ${pathname === item.to || (item.to === '/news' && pathname.startsWith('/news/')) ? 'active' : ''}`}>
                                        <Link href={item.to}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default Header
