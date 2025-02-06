import { Pre, HighlightedCode } from "codehike/code"

import { loadFont } from "@remotion/google-fonts/RobotoMono"
import { tokenTransitions, useTokenTransitions } from "./token-transitions"
import { mark } from "./annotations/mark"
const { fontFamily } = loadFont()

export function Code({
  oldCode,
  newCode,
  durationInFrames = 10,
}: {
  readonly oldCode?: HighlightedCode
  readonly newCode: HighlightedCode
  readonly durationInFrames?: number
}) {
  const { code, ref } = useTokenTransitions(oldCode, newCode, durationInFrames);
  return (
    <div
      style={{
        fontSize: 42,
        lineHeight: 1.6,
        fontFamily,
        color: "#fffa",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", height: "1.5rem" }}>
        {newCode.meta}
      </div>
      <Pre ref={ref} code={code} handlers={[tokenTransitions, mark]} />
    </div>
  )
}
