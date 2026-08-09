export type BlogPostMeta = {
  slug: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "Unlocking-Your-Company-s-Potential",
    cover: "/images/news2.webp",
    coverWidth: 1800,
    coverHeight: 942,
  },
  {
    slug: "Aviation-Expertise-A-Key-to-Success",
    cover: "/images/news1.webp",
    coverWidth: 1500,
    coverHeight: 1001,
  },
  {
    slug: "Industry-Recognition-and-Awards",
    cover: "/images/iata.webp",
    coverWidth: 966,
    coverHeight: 655,
  },
  {
    slug: "SAATM",
    cover: "/images/saatm.webp",
    coverWidth: 756,
    coverHeight: 426,
  },
  {
    slug: "medays-amadeus",
    cover: "/images/fadi_amadeus.webp",
    coverWidth: 1170,
    coverHeight: 1163,
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
