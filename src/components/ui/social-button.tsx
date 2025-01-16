import { Button } from "./button"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface SocialButtonProps {
  icon: LucideIcon
  label: string
  href: string
  className?: string
}

export function SocialButton({ icon: Icon, label, href, className }: SocialButtonProps) {
  return (
    <Button 
      variant="outline" 
      className={cn(
        "w-full h-14 bg-purple-950/30 border-purple-500/20",
        "hover:bg-purple-900/40 hover:border-purple-400",
        "transition-all duration-300 group",
        "flex items-center justify-center gap-3",
        "text-lg font-medium",
        "social-button-glow",
        className
      )}
      asChild
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <Icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
        <span className="text-purple-100 group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </a>
    </Button>
  )
}
