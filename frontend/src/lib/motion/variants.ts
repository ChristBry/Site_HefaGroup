import type { Variants } from "motion/react"

/** Default viewport config: animate once, slightly before the element is fully visible. */
export const viewportOnce = { once: true, amount: 0.1 } as const

/** Subtle fade + rise. The default entrance for most sections and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

/** Plain fade, no movement. For large media (images, banners) where sliding feels heavy. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

/** Wrap a list of fadeUp children with this to reveal them one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}
