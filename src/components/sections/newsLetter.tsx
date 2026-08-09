"use client"

import Image from 'next/image'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fadeUp, viewportOnce } from '@/lib/motion/variants'

const NewsLetter = () => {
    const { t } = useTranslation("common")
    const [formData, setFormData] = useState({
        email: ''
      })
      const [status, setStatus] = useState('');
      const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbypeEm9hhyopBsa6zv89TpIwWV7ysnbPA7OnCH9hIo9k3XSRo-cXhrAU6W_XfRlrg0CYw/exec';


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData({ email: value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(t('newsletter.sending'));

        try {
          const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok || response.type === 'opaque') {
            setStatus(t('newsletter.success'));
            setFormData({ email: ''});
          } else {
            setStatus(t('newsletter.failure'));
            console.error('Erreur de réponse (potentiellement réseau ou configuration):', response);
          }
        } catch (error) {
          setStatus(t('newsletter.error'));
          console.error('Erreur réseau ou interne:', error);
        } finally {
            setTimeout(() => {
                setStatus('');
            }, 10000)
        }
      };

    return (
        <motion.div className='newsletter'>
            <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className='justify-center items-center flex flex-col'>
                <Image src="/images/logo.webp" alt="logo" width={2919} height={808} className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <p className='text-center text-xl'>{t('newsletter.title')}</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder={t('newsletter.placeholder')} className='w-[60%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button type="submit" className='w-[25%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 cursor-pointer'>{t('actions.subscribe')}</button>
                </div>
                {status && <h5 className='status-news text-center text-xl'>{status}</h5>}
            </motion.form>
        </motion.div>

    )
}

export default NewsLetter
