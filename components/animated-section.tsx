"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideInUp" | "slideInLeft" | "slideInRight" | "scaleIn"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slideInUp":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "slideInLeft":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "slideInRight":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "scaleIn":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
