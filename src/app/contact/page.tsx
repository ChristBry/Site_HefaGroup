"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { fadeUp, viewportOnce } from "@/lib/motion/variants"
import { validateContactForm, sanitizeContactFormData } from "@/lib/validation"

export default function Contact() {
  const { t } = useTranslation("contact")
  const { t: tc } = useTranslation("common")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('');
  const GOOGLE_SHEETS_API_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_URL ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { valid } = validateContactForm(formData);
    if (!valid) {
      setStatus(t('status.invalid'));
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    setStatus(t('status.sending'));

    try {
      const response = await fetch(GOOGLE_SHEETS_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizeContactFormData(formData)),
      });

      if (response.ok || response.type === 'opaque') {
        setStatus(t('status.success'));
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus(t('status.failure'));
        console.error('Erreur de réponse (potentiellement réseau ou configuration):', response);
      }
    } catch (error) {
      setStatus(t('status.error'));
      console.error('Erreur réseau ou interne:', error);
    } finally {
      setTimeout(() => {
        setStatus('');
      }, 10000)
    }
  };
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
        <h1 className='text-[35px] font-bold'>{t('title')}</h1>
        <div className="line"></div>
      </motion.div>
      <div className='service-header flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>{t('consultation')}</h1>
        <div className="line"></div>
      </div>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        onSubmit={handleSubmit} className="contact-form flex items-center h-[600px] lg:h-[500px] flex">
        <Image src="/images/contact.webp" alt="" width={1500} height={1167} className="hidden sm:block w-[50%] h-[100%]" />
        {status ? <h5 className='flex justify-center status-contact text-center text-xl'>{status}</h5> :
          <div className="contact-container flex flex-col gap-10 w-[50%]">
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="flex flex-col gap-6">
                <input onChange={handleChange} value={formData.name} type="text" id="name" name="name" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder={t('form.name')} required />
              </div>
              <div>
                <input onChange={handleChange} value={formData.phone} type="text" id="phone" name="phone" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder={t('form.phone')} required />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
              <div className="flex flex-col gap-6">
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder={t('form.email')} required />
              </div>
              <select onChange={handleChange} value={formData.service} name="service" id="services" className="cursor-pointer border-b-1 w-70 lg:w-50 xl:w-60" required>
                <option value="" disabled>{t('form.servicePlaceholder')}</option>
                <option value="services">{t('form.serviceOptions.services')}</option>
                <option value="consulting">{t('form.serviceOptions.consulting')}</option>
                <option value="training">{t('form.serviceOptions.training')}</option>
                <option value="representation">{t('form.serviceOptions.representation')}</option>
              </select>
            </div>
            <textarea onChange={handleChange} value={formData.message} name="message" id="message" rows={4} className="border-b-1 border-gray-500 w-70 sm:w-[95%]" placeholder={t('form.message')}></textarea>
            <div className="flex items-center">
              <button type="submit" className='button-contact cursor-pointer rounded-lg'>{tc('actions.sendMessage')}</button>
            </div>
          </div>
        }
      </motion.form>
    </div>
  )
}
