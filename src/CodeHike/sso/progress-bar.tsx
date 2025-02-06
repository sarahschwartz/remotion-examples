import { useCurrentFrame } from "remotion"
import { Step } from "../../SSO/Utils/types"
import { FPSFactor } from "../../constants"

export function ProgressBar({
  steps,
}: {
  readonly steps: Step[]
}) {
  const frame = useCurrentFrame()

  let currentStart = 0
  let currentIndex = 0
  let nextStart = steps[currentIndex].duration * FPSFactor;
  while (nextStart <= frame) {
    currentIndex++
    currentStart = nextStart
    nextStart += steps[currentIndex].duration * FPSFactor;
  }
  const currentStepProgress =
    (frame - currentStart) / (steps[currentIndex].duration * FPSFactor)

  return (
    <div
      style={{
        position: "absolute",
        bottom: 36,
        left: 120,
        right: 120,
        display: "flex",
        gap: 6,
      }}
    >
      {steps.map(({ title, duration }, index) => {
        const isCurrent = index === currentIndex
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flex: duration,
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 48,
                color: isCurrent ? "#fff" : "#fffa",
              }}
            >
              {title}
            </div>
            <div
              style={{
                backgroundColor: "#fff2",
                borderRadius: 6,
                overflow: "hidden",
                height: 10,
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: "#fffb",
                  borderRadius: 6,
                  width:
                    index > currentIndex
                      ? 0
                      : isCurrent
                      ? currentStepProgress * 100 + "%"
                      : "100%",
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
