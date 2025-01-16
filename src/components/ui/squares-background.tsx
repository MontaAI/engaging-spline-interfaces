import { useRef, useEffect, useState } from "react"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const numSquaresX = useRef<number>()
  const numSquaresY = useRef<number>()
  const gridOffset = useRef({ x: 0, y: 0 })
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)
  const lastTime = useRef(0)
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Create offscreen canvas
    offscreenCanvasRef.current = document.createElement('canvas');
    const offscreenCtx = offscreenCanvasRef.current.getContext('2d');

    const ctx = canvas.getContext("2d")
    if (!ctx || !offscreenCtx) return

    // Set canvas background
    canvas.style.background = "#060606"

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
      offscreenCanvasRef.current.width = canvas.width
      offscreenCanvasRef.current.height = canvas.height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      offscreenCtx.clearRect(0, 0, offscreenCanvasRef.current.width, offscreenCanvasRef.current.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      offscreenCtx.lineWidth = 0.5

      for (let x = startX; x < offscreenCanvasRef.current.width + squareSize; x += squareSize) {
        for (let y = startY; y < offscreenCanvasRef.current.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            offscreenCtx.fillStyle = hoverFillColor
            offscreenCtx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          offscreenCtx.strokeStyle = borderColor
          offscreenCtx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      const gradient = offscreenCtx.createRadialGradient(
        offscreenCanvasRef.current.width / 2,
        offscreenCanvasRef.current.height / 2,
        0,
        offscreenCanvasRef.current.width / 2,
        offscreenCanvasRef.current.height / 2,
        Math.sqrt(Math.pow(offscreenCanvasRef.current.width, 2) + Math.pow(offscreenCanvasRef.current.height, 2)) / 2,
      )
      gradient.addColorStop(0, "rgba(6, 6, 6, 0)")
      gradient.addColorStop(1, "#060606")

      offscreenCtx.fillStyle = gradient
      offscreenCtx.fillRect(0, 0, offscreenCanvasRef.current.width, offscreenCanvasRef.current.height)

      // Copy to main canvas
      ctx.drawImage(offscreenCanvasRef.current, 0, 0)
    }

    const updateAnimation = (currentTime: number) => {
      if (!lastTime.current) lastTime.current = currentTime
      const delta = (currentTime - lastTime.current) / 16 // normalize to 60fps

      const effectiveSpeed = Math.max(speed * delta, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      lastTime.current = currentTime
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize,
      )
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize,
      )

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY })
    }

    const handleMouseLeave = () => {
      setHoveredSquare(null)
    }

    // Event listeners
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup
    resizeCanvas()
    requestRef.current = requestAnimationFrame(updateAnimation)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
    />
  )
}
