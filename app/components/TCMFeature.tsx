import { Leaf, Heart, Sun } from "lucide-react"

const tcmFeatures = [
  { icon: Leaf, title: "平衡阴阳", description: "调和身体阴阳，促进整体健康" },
  { icon: Heart, title: "五行调理", description: "根据五行理论，全面调理身心" },
  { icon: Sun, title: "顺应自然", description: "遵循自然规律，达到天人合一" },
]

export default function TCMFeature() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">中医养生特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tcmFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
