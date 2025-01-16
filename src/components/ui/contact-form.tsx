'use client'

import { useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { CheckCircle2, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Input
            placeholder="Your Name"
            className="bg-black/30 border-purple-500/20 focus:border-purple-500 transition-all duration-300 h-12 neon-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <div className="input-glow" />
        </div>
        
        <div className="relative">
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-black/30 border-purple-500/20 focus:border-purple-500 transition-all duration-300 h-12 neon-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <div className="input-glow" />
        </div>

        <div className="relative">
          <Textarea
            placeholder="Your Message"
            className="bg-black/30 border-purple-500/20 focus:border-purple-500 transition-all duration-300 min-h-[120px] neon-input"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <div className="input-glow" />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-purple-600 hover:bg-purple-500 transition-all duration-300 animate-pulse-neon disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : isSuccess ? (
          <CheckCircle2 className="mr-2 h-4 w-4 text-green-400" />
        ) : null}
        {isSubmitting ? "Sending..." : isSuccess ? "Sent!" : "Send Message"}
      </Button>
    </form>
  )
}
