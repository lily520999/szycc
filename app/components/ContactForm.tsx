"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // 这里应该是实际的表单提交逻辑
    await new Promise((resolve) => setTimeout(resolve, 2000)) // 模拟API调用
    setIsSubmitting(false)
    alert("表单提交成功！") // 在实际应用中，应该使用更好的提示方式
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Mail className="mr-2" /> 联系我们
        </h2>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <p className="flex items-center justify-center text-lg">
              <Phone className="mr-2" /> 客服热线：400-123-4567
            </p>
            <p className="text-sm text-gray-600 mt-2">工作时间：周一至周五 9:00-18:00</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名
              </label>
              <Input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                电子邮箱
              </label>
              <Input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                留言
              </label>
              <Textarea id="message" rows={4} required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  提交中...
                </>
              ) : (
                "发送留言"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}