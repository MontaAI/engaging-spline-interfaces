
import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"

export function WavesBackgroundDemo() {
  const { theme } = useTheme()
  
  return (
    <div className="relative w-full h-full bg-white">
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(0, 0, 0, 0.2)"
          backgroundColor="white"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
    </div>
  )
}
