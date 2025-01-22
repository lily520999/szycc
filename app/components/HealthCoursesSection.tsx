import Link from "next/link"
import { Book } from "lucide-react"
import { Button } from "@/components/ui/button"

const healthCourses = [
  { name: "中医基础理论", description: "了解阴阳五行、脏腑经络等中医基础知识", duration: "8周课程", price: "¥999" },
  { name: "太极养生功", description: "学习太极拳基本套路，提高身体协调性", duration: "12周课程", price: "¥1299" },
  { name: "食疗与养生", description: "掌握四季养生食疗方法，调理身体平衡", duration: "6周课程", price: "¥799" },
]

export default function HealthCoursesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center md:justify-start">
          <Book className="mr-2" /> 健康课程
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthCourses.map((course, index) => (
            <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">{course.price}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <Link href="/courses" passHref>
                <Button className="w-full mt-4">查看详情</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/courses" passHref>
            <Button size="lg">浏览所有课程</Button>
          </Link>
        </div>
      </div>
    </section>