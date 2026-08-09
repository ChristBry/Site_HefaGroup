"use client"

import Image from "next/image"
import Link from "next/link"
import NewsLetter from "@/components/sections/newsLetter"
import { motion } from 'motion/react'
import { useTranslation } from "react-i18next"
import { blogPosts } from "@/lib/blog/posts"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion/variants"

const displayOrder = [
  "medays-amadeus",
  "Industry-Recognition-and-Awards",
  "SAATM",
  "Aviation-Expertise-A-Key-to-Success",
  "Unlocking-Your-Company-s-Potential",
]

export default function News() {
  const { t } = useTranslation("blog")
  const { t: tc } = useTranslation("common")

  const orderedPosts = displayOrder
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))

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
        <h1 className='text-[35px] font-bold'>{t('listTitle')}</h1>
        <div className="line" />
      </motion.div>
      <div className="blog-part flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="news-list flex w-[92%] max-w-4xl flex-col gap-6"
        >
          {orderedPosts.map((post) => (
            <motion.article key={post.slug} variants={fadeUp}>
              <Link
                href={`/news/${post.slug}`}
                className="news-row group flex flex-col gap-5 sm:flex-row sm:items-start"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
                  <Image
                    src={post.cover}
                    alt={t(`posts.${post.slug}.cardTitle`)}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="news-badge">{t(`posts.${post.slug}.category`)}</span>
                    <span className="news-date">{t(`posts.${post.slug}.date`)}</span>
                  </div>
                  <h5 className="text-[22px] font-bold">{t(`posts.${post.slug}.cardTitle`)}</h5>
                  <p className="text-justify text-[17px] text-gray-700">{t(`posts.${post.slug}.cardExcerpt`)}</p>
                  <span className="button-news inline-flex items-center gap-2 text-lg font-semibold">
                    {tc('actions.readMore')}
                    <i className="fa-solid fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <NewsLetter />
    </div>
  )
}
