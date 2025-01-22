import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "中医养生：四季调理的智慧",
    excerpt: "探索中医如何根据四季变化调整养生方法，保持身体平衡与健康。",
    date: "2023-05-15",
    author: "李医生",
    slug: "tcm-wisdom-four-seasons",
  },
  {
    title: "5种超级食物及其健康益处",
    excerpt: "深入了解这5种营养丰富的超级食物，以及如何将它们融入日常饮食。",
    date: "2023-05-10",
    author: "王营养师",
    slug: "5-superfoods-health-benefits",
  },
  {
    title: "居家太极：15分钟日常练习指南",
    excerpt: "学习简单有效的15分钟太极练习，提高身体灵活性和心理平静。",
    date: "2023-05-05",
    author: "张教练",
    slug: "home-tai-chi-15-min-guide",
  },
]

export default function BlogPosts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">最新健康资讯</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.date} | 作者：{post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant="outline">阅读全文</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <Button>查看所有文章</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
