"use client"

import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/motion/variants"

type TitleDescription = { title: string; description: string }
type EcosystemGroup = { title: string; items: string }

export default function Ncabp() {
    const { t } = useTranslation("ncabp")
    const { t: tc } = useTranslation("common")

    const countries = t('bridge.countries', { returnObjects: true }) as string[]
    const missionItems = t('visionMission.mission.items', { returnObjects: true }) as string[]
    const impactItems = t('impact.items', { returnObjects: true }) as TitleDescription[]
    const pillars = t('pillars.items', { returnObjects: true }) as string[]
    const modelSteps = t('model.steps', { returnObjects: true }) as TitleDescription[]
    const yearRound = t('summit.yearRound', { returnObjects: true }) as string[]
    const ecosystemGroups = t('ecosystem.groups', { returnObjects: true }) as EcosystemGroup[]
    const commitments = t('commitments.items', { returnObjects: true }) as TitleDescription[]
    const phases = t('phases.steps', { returnObjects: true }) as TitleDescription[]
    const successItems = t('success.items', { returnObjects: true }) as TitleDescription[]
    const ctaSteps = t('cta.steps', { returnObjects: true }) as string[]

    return (
        <div>
            <div className="space"></div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="ncabp-hero flex flex-col justify-center items-center"
            >
                <h4 className="ncabp-tag hero rounded-full w-60 text-center">{t('hero.tag')}</h4>
                <h1 className="text-center text-[32px] sm:text-5xl font-bold">{t('hero.title')}</h1>
                <p className="text-center text-lg sm:w-[60%]">{t('hero.description')}</p>
                <div className="ncabp-hero-tagline flex flex-col items-center text-center">
                    <h5>{t('hero.frameworkLabel')}</h5>
                    <p>{t('hero.tagline')}</p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="ncabp-bridge flex flex-col lg:flex-row items-center gap-8"
            >
                <span className="ncabp-bridge-number">{t('bridge.count')}</span>
                <div className="flex flex-col gap-3 lg:w-[70%]">
                    <h2 className="text-2xl sm:text-3xl font-bold">{t('bridge.title')}</h2>
                    <p className="text-lg">{t('bridge.countLabel')}</p>
                    <p className="text-justify">{t('bridge.description')}</p>
                    <div className="ncabp-countries flex flex-col sm:flex-row gap-4">
                        <span className="ncabp-anchor-country">{t('bridge.anchorCountry')}</span>
                        <p>{countries.join(' • ')}</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="ncabp-vm-grid flex flex-col lg:flex-row gap-6"
            >
                <motion.div variants={fadeUp} className="ncabp-vm-card ncabp-vm-vision flex flex-col gap-3">
                    <h4 className="ncabp-eyebrow vision">{t('visionMission.vision.label')}</h4>
                    <h2 className="text-2xl font-bold">{t('visionMission.vision.title')}</h2>
                    <p className="text-justify">{t('visionMission.vision.description')}</p>
                </motion.div>
                <motion.div variants={fadeUp} className="ncabp-vm-card ncabp-vm-mission flex flex-col gap-3">
                    <h4 className="ncabp-eyebrow mission">{t('visionMission.mission.label')}</h4>
                    <h2 className="text-2xl font-bold">{t('visionMission.mission.title')}</h2>
                    <ul className="ncabp-mission-list flex flex-col gap-1">
                        {missionItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>

            <div className="ncabp-section flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag impact rounded-full w-60 text-center">{t('impact.tag')}</h4>
                    <h2 className="text-center text-2xl sm:text-4xl font-bold">{t('impact.title')}</h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-impact-grid grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {impactItems.map((item, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-impact-card">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="ncabp-section ncabp-section-dark flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag pillars rounded-full w-60 text-center">{t('pillars.tag')}</h4>
                    <h3 className="text-center text-2xl sm:text-4xl font-bold text-white">{t('pillars.title')}</h3>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-pillars-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-pillar flex items-center gap-4">
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <p>{pillar}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="ncabp-section flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag models rounded-full w-60 text-center">{t('model.tag')}</h4>
                    <h2 className="text-center text-2xl sm:text-4xl font-bold">{t('model.title')}</h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-model-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {modelSteps.map((step, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-model-step flex flex-col items-center text-center">
                            <span className="ncabp-model-number">{index + 1}</span>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="ncabp-note text-center">{t('model.note')}</p>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="ncabp-summit flex flex-col lg:flex-row gap-8"
            >
                <motion.div variants={fadeIn} className="ncabp-summit-card flex flex-col gap-3 lg:w-[45%]">
                    <h4 className="ncabp-eyebrow">{t('summit.tag')}</h4>
                    <h2 className="text-2xl font-bold">{t('summit.title')}</h2>
                    <p className="text-justify">{t('summit.description')}</p>
                    <p className="ncabp-summit-highlight">{t('summit.highlight')}</p>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:w-[55%]">
                    <h4 className="ncabp-eyebrow">{t('summit.yearRoundTag')}</h4>
                    <ul className="ncabp-summit-list flex flex-col gap-2">
                        {yearRound.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>

            <div className="ncabp-section flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag ecosystem rounded-full w-60 text-center">{t('ecosystem.tag')}</h4>
                    <h2 className="text-center text-2xl sm:text-4xl font-bold">{t('ecosystem.title')}</h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-ecosystem-grid grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {ecosystemGroups.map((group, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-ecosystem-card">
                            <h4>{group.title}</h4>
                            <p>{group.items}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="ncabp-note text-center">{t('ecosystem.note')}</p>
            </div>

            <div className="ncabp-section ncabp-section-dark flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag commitments rounded-full w-60 text-center">{t('commitments.tag')}</h4>
                    <h3 className="text-center text-2xl sm:text-4xl font-bold text-white">{t('commitments.title')}</h3>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-commitments-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {commitments.map((item, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-commitment">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="ncabp-section flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag phases rounded-full w-60 text-center">{t('phases.tag')}</h4>
                    <h2 className="text-center text-2xl sm:text-4xl font-bold">{t('phases.title')}</h2>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-phases grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {phases.map((phase, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-phase flex flex-col items-center text-center">
                            <span className="ncabp-phase-number">{index + 1}</span>
                            <h4>{phase.title}</h4>
                            <p>{phase.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="ncabp-note text-center">{t('phases.note')}</p>
            </div>

            <div className="ncabp-section ncabp-section-dark flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="ncabp-section-header flex flex-col items-center"
                >
                    <h4 className="ncabp-tag success rounded-full w-60 text-center">{t('success.tag')}</h4>
                    <h3 className="text-center text-2xl sm:text-4xl font-bold text-white">{t('success.title')}</h3>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="ncabp-success-list flex flex-col gap-4"
                >
                    {successItems.map((item, index) => (
                        <motion.div key={index} variants={fadeUp} className="ncabp-success-item flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="ncabp-cta flex flex-col items-center text-center"
            >
                <h4 className="ncabp-tag cta rounded-full w-60 text-center">{t('cta.tag')}</h4>
                <h2 className="text-2xl sm:text-4xl font-bold">{t('cta.title')}</h2>
                <p className="sm:w-[60%]">{t('cta.description')}</p>
                <div className="ncabp-cta-steps flex flex-col sm:flex-row gap-6">
                    {ctaSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
                <a
                    href="https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20en%20savoir%20plus%20sur%20NCABP"
                    target="_blank"
                    className="plus-button-ncabp rounded-full text-center w-[220px]"
                >
                    {tc('actions.getInTouch')}
                </a>
            </motion.div>
        </div>
    )
}
