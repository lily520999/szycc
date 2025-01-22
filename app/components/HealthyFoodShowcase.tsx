import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const healthyFoods = [
  {
    id: "1",
    name: "有机枸杞",
    description: "宁夏特产，滋补养生",
    price: 68,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    name: "黑芝麻糊",
    description: "营养丰富，养颜护发",
    price: 45,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    name: "桂圆红枣茶",
    description: "温补气血，改善睡眠",
    price: 56,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function HealthyFoodShowcase() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center md:justify-start">
          <ShoppingCart className="mr-2" /> 健康食品
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthyFoods.map((food) => (
            <div key={food.id} className="bg-white p-6 rounded-lg shadow-md">
              <Link href={`/products/${food.id}`}>
                <div className="mb-4 relative w-full h-48">
                  <Image
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-md object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
              <p className="text-gray-600 mb-4">{food.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">¥{food.price}</span>
                <Button variant="outline">加入购物车</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>