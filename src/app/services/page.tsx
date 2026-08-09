"use client"

import Image from "next/image"
import NewsLetter from "@/components/sections/newsLetter"
import { motion } from 'motion/react'
import { useTranslation } from "react-i18next"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion/variants"

type SolutionItem = { title: string; description: string }
type StrategicItem = { title: string; description: string }
type ExpansionItem = { title: string; description: string }

export default function Services() {
  const { t } = useTranslation("services")
  const { t: tc } = useTranslation("common")

  const solutions = t('solutions.items', { returnObjects: true }) as SolutionItem[]
  const solutionImages = ['/images/investment.webp', '/images/representation.webp', '/images/corporate.webp', '/images/training.webp']

  const strategic = t('strategic.items', { returnObjects: true }) as StrategicItem[]
  const strategicIcons = ['fa-bullseye', 'fa-chess-pawn', 'fa-chart-pie', 'fa-code-compare']
  const strategicSlices = ['mission-vision', 'performance-monitoring', 'strategy-development', 'resource-allocation']

  const expansion = t('expansion.items', { returnObjects: true }) as ExpansionItem[]
  const expansionImages = ['/images/market.webp', '/images/partner.webp', '/images/attraction.webp', '/images/sustainable.webp']

  return (
    <div>
      <div className="space">

      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='banner-page flex flex-col justify-center items-center h-[200px] sm:h-[280px] lg:h-[350px] xl:h-[400px]'
      >
        <h1 className='text-[35px] font-bold'>{t('title')}</h1>
        <div className="line" />
      </motion.div>
      <div className='service-header flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>{t('solutions.title')}</h1>
        <div className="line" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="services-part flex flex-col justify-center items-center gap-10 "
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-20">
          {solutions.slice(0, 2).map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
              <Image src={solutionImages[index]} alt={item.title} width={512} height={512} className="rounded-xl w-30" />
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="text-sm text-justify">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-20">
          {solutions.slice(2, 4).map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
              <Image src={solutionImages[index + 2]} alt={item.title} width={512} height={512} className="rounded-xl w-30" />
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="text-sm text-justify">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="strategic">
        <div className='strategic-header flex flex-col justify-center items-center'>
          <h1 className='text-2xl sm:text-4xl font-bold'>{t('strategic.title')}</h1>
          <div className="line"></div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="strategic-container flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10"
        >
          <div className="sm:w-[20%] flex flex-col justify-center items-center gap-8 sm:gap-20 ">
            <motion.div variants={fadeUp} className="mission hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl text-center sm:text-end font-bold">{strategic[0].title}</h4>
              <p className="text-md text-center sm:text-end text-white">{strategic[0].description}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl text-end font-bold">{strategic[1].title}</h4>
              <p className="text-md text-center sm:text-end text-white">{strategic[1].description}</p>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="flex justify-center items-center w-[300px] h-[300px] relative pie-chart-container">
            <div className="pie-chart">
              {strategic.map((item, index) => (
                <div key={item.title} className={`pie-slice ${strategicSlices[index]}`}>
                  <i className={`fa-solid ${strategicIcons[index]} text-2xl text-white`}></i>
                </div>
              ))}
            </div>
            <div className="pie-center">
              <h2 className="text-center">{t('strategic.center')}</h2>
            </div>
          </motion.div>
          <div className="w-[100%] sm:w-[20%] flex flex-col justify-center items-center gap-8 sm:gap-20 ">
            <motion.div variants={fadeUp} className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl sm:text-start text-center font-bold">{strategic[2].title}</h4>
              <p className="text-md text-center sm:text-start text-white">{strategic[2].description}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl sm:text-start text-center font-bold">{strategic[3].title}</h4>
              <p className="text-md text-center sm:text-start text-white">{strategic[3].description}</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="expansion flex flex-col lg:flex-row justify-center items-center"
      >
        {expansion.map((item, index) => (
          <motion.div key={item.title} variants={fadeUp} className={`expansion-container w-[100%] lg:w-[25%] h-[250px] flex flex-col items-center ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
            <Image src={expansionImages[index]} alt={item.title} width={512} height={512} className="w-15" />
            <h4 className="text-xl">{item.title}</h4>
            <div className="line"></div>
            <p className="text-center text-ms">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="service-plus flex flex-col items-center justify-center h-[300px] lg:h-[500px]">
        <h1 className='text-center text-2xl lg:text-4xl'>{t('plus.title')}</h1>
        <p className='text-justify sm:text-center text-md sm:text-xl sm:w-[70%]'>{t('plus.description')}</p>
        <div className="plus-button rounded-full text-center w-[200px]">
          <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank'>{tc('actions.getInTouch')}</a>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
