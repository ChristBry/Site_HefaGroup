"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import type { BlogPostMeta } from "@/lib/blog/posts"
import { fadeIn, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion/variants"

type ContentBlock = { heading?: string; paragraph?: string; list?: string[] }

type PostTranslation = {
  category: string
  date: string
  readTime: number
  title: string
  heroTitle: string
  heroParagraph: string
  sections: ContentBlock[]
}

export function BlogPostContent({ post }: { post: BlogPostMeta }) {
  const { t } = useTranslation("blog")
  const content = t(`posts.${post.slug}`, { returnObjects: true }) as PostTranslation

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='banner-page flex flex-col justify-center items-center h-[200px] sm:h-[280px] lg:h-[350px] xl:h-[400px]'
      >
        
        <h1 className='text-[35px] font-bold'>{t('listTitle')}</h1>
        <div className="line" />
      </motion.div>

      <div className='blogpage-part flex flex-col gap-8 lg:gap-10'>
        {/* 1. Tags + big title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="blogpage-title flex flex-col gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="news-badge">{content.category}</span>
            <span className="news-date">{content.date} · {content.readTime}{t('readTimeSuffix')}</span>
          </div>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold">{content.heroTitle}</h1>
        </motion.div>

        {/* 2. Cover image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="relative flex justify-center"
        >
          <Image
            src={post.cover}
            alt={content.heroTitle}
            width={1107}
            height={738}
            className='w-[100%] sm:w-[60%] lg:w-[40%] xl:w-[50%]'
          />

        </motion.div>

        {/* 3. Hook paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="blogpage-intro max-w-8xl text-lg text-justify"
        >
          {content.heroParagraph}
        </motion.p>

        {/* 4. Post content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className='blogpage-content'
        >
          {content.sections.map((block, index) => (
            <motion.div key={index} variants={fadeUp}>
              {block.heading && <h4 className='text-2xl font-bold'>{block.heading}</h4>}
              {block.paragraph && <p className="text-justify text-lg">{block.paragraph}</p>}
              {block.list && (
                <ol className='list-disc'>
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
