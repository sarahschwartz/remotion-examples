import { ClickButton } from "../SSO/PartTwo/ClickButton";
import { Icons } from "../SSO/Utils/Icons";
import { bigBlueButton, defaultButton } from "../SSO/Utils/styles";
import { OverviewProps } from "./types";

export const OneClick = ({
  frame,
  fps,
  startTime,
  duration,
}: OverviewProps) => {
  const editorSize = "1080px";
  const pointerSize = "160px";

  const signUpContainerStyles = {
    marginLeft: "40px",
    marginTop: "2px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Icons
        sequenceName="Browser"
        images={["browser.svg"]}
        imageStyles={{
          height: editorSize,
          width: editorSize,
          marginLeft: "450px",
          marginTop: "-10px",
        }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />

      <ClickButton
        startTime={startTime + 30}
        duration={duration - 30}
        text="Sign Up"
        containerStyles={signUpContainerStyles}
        buttonStyles={{ ...bigBlueButton, ...defaultButton }}
        frame={frame}
        fps={fps}
        totalClicks={1}
      />

      <Icons
        translate={{ x: -50, y: -120 }}
        sequenceName="Pointer"
        images={["pointer.svg"]}
        imageStyles={{
          height: pointerSize,
          width: pointerSize,
          marginTop: "800px",
          marginLeft: "1080px",
        }}
        startTime={startTime + 30}
        duration={duration - 45}
        frame={frame}
        fps={fps}
      />
    </>
  );
};
