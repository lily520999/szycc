import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "张女士",
    content: "自从参加了太极养生功课程，我的睡眠质量明显改善了。每天早上醒来都感觉精力充沛！",
    rating: 5,
  },
  {
    name: "李先生",
    content: "健康食品的质量非常好，特别是有机枸杞，泡水喝后感觉整个人都轻松了。客服的建议也很专业。",
    rating: 5,
  },
  {
    name: "王医生",
    content: "作为一名西医，我很欣赏这个平台将中医理论与现代健康理念结合的方式。非常推荐给我的病人。",
    rating: 5,
  },
]

export default function UserTestimonials() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">用户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={`https://api.dicebear.com/6.x/micah/svg?seed=${testimonial.name}`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
