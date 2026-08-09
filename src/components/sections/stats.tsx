"use client"

import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'

function StatCounter({ to, label }: { to: number; label: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.6 })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (value) => Math.round(value))

    useEffect(() => {
        if (!isInView) return
        const controls = animate(count, to, { duration: 1, ease: "easeOut" })
        return () => controls.stop()
    }, [isInView, count, to])

    return (
        <div ref={ref} className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
            <div className='flex items-center'>
                <p className='plus text-4xl xl:text-6xl'>+</p>
                <motion.h1 className='text-4xl xl:text-6xl'>{rounded}</motion.h1>
            </div>
            <p className='text-center text-sm sm:text-xl'>{label}</p>
        </div>
    )
}

const Stats = () => {
    const { t } = useTranslation("common")

    return (
        <div className="stats flex justify-center items-center sm:gap-20">
            <StatCounter to={15} label={t('stats.experience')} />
            <StatCounter to={20} label={t('stats.customers')} />
            <StatCounter to={5} label={t('stats.consultants')} />
            <StatCounter to={30} label={t('stats.problems')} />
        </div>
    )
}

export default Stats
