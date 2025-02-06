import { interpolate, interpolateColors, useCurrentFrame } from "remotion"
import { AnnotationHandler } from "codehike/code"
import { FPSFactor } from "../../../constants"

export const mark: AnnotationHandler = {
  name: "mark",
  Inline: ({ children, annotation }) => {
    const parts = annotation.query.split(" ")

    const delayBase = +parts[0] || 80;
    const durationBase = +parts[1] || 20;
    const delay = delayBase * FPSFactor;
    const duration = durationBase * FPSFactor;
    const color = parts[2] || "#ec489944"

    const frame = useCurrentFrame()
    const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })

    const backgroundColor = interpolateColors(
      progress,
      [0, 1],
      ["rgba(0, 0, 0, 0)", color]
    )
    return (
      <div
        style={{
          display: "inline-block",
          backgroundColor,
          borderRadius: 4,
          padding: "0 .125rem",
          margin: "0 -.125rem",
        }}
      >
        {children}
      </div>
    )
  },
}
