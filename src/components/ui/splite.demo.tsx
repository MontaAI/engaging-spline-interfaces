
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-white relative overflow-hidden border-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black">
            Montassar Hajri
          </h1>
          <p className="mt-6 text-black/70 max-w-lg text-lg md:text-xl leading-relaxed">
            Software Engineer specializing in building exceptional digital experiences
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative bg-white">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
