"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation("common")

    return (
        <div className='footer'>
            <div className='sm:flex justify-around footer-container'>
                <div className="links hidden sm:flex flex-col gap-4">
                    <h3 className='text-[24px]'>{t('footer.quickLinks')}</h3>
                    <div className='flex flex-col gap-4'>
                        <Link href='/' className='links text-xl'>{t('nav.home')}</Link>
                        <Link href='/about' className='links text-xl'>{t('nav.about')}</Link>
                        <Link href='/news' className='links text-xl'>{t('nav.news')}</Link>
                        <Link href='/contact' className='links text-xl'>{t('nav.contact')}</Link>
                        <Link href='/' className='links text-xl'>{t('footer.faq')}</Link>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col gap-4">
                    <h3 className='text-[24px]'>{t('footer.servicesTitle')}</h3>
                    <Link href='/services' className='links'>Business Development</Link>
                    <Link href='/services' className='links'>Representation Services</Link>
                    <Link href='/services' className='links'>Corporate Events</Link>
                    <Link href='/services' className='links'>Training Facilitation</Link>
                </div>
                <div className="contact-footer gap-2 flex flex-col">
                    <h3 className='text-[24px]'>{t('footer.contactTitle')}</h3>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-phone text-xl"></i>
                        <div>
                            <h5>{t('footer.phoneLabel')}</h5>
                            <p>{t('topbar.phone')}</p>
                        </div>
                    </div>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-xl"></i>
                        <div>
                            <h5>{t('footer.locationLabel')}</h5>
                            <p>{t('topbar.location')}</p>
                        </div>
                    </div>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-envelope text-xl"></i>
                        <div>
                            <h5>{t('footer.emailLabel')}</h5>
                            <p>{t('topbar.email')}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright sm:flex-row-reverse sm:flex items-center justify-between border-t-2 border-t-white">
                <div className='footer-social flex gap-4'>
                    <a href="https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] whatsapp" aria-label='Whatsapp'><i className="fa-brands fa-whatsapp text-xl"></i></a>
                    <a href="https://www.facebook.com/hefagroupsarl" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] facebook" aria-label='Facebook'><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/hefagroups" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] instagram" aria-label='Instagram'><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/company/hefagroup-partners" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] linkedin" aria-label='LinkedIn'><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                </div>
                <p>{t('footer.copyright')}</p>
            </div>
        </div>
    )
}

export default Footer
