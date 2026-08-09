import { notFound } from "next/navigation"
import NewsLetter from "@/components/sections/newsLetter"
import { BlogPostContent } from "@/components/blog/BlogPostContent"
import { blogPosts, getBlogPost } from "@/lib/blog/posts"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <div className="space"></div>
      <BlogPostContent post={post} />
      <NewsLetter />
    </div>
  )
}
