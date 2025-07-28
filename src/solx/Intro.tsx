import { AbsoluteFill } from "remotion";
import { FPSFactor } from "../constants";
import { AccountAbstraction } from "../SSO/Intro/AA";
import { SSOTitle } from "../SSO/Intro/SSO-Title";
import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Sessions } from "./Utils/Sessions";


export const Intro = ({ frame, fps, startTime, duration }: OverviewProps) => {
    const aaStartTime = startTime;
    const aaDuration = 250 * FPSFactor;
    const sessionsStartTime = aaStartTime + aaDuration + 2;
    const sessionsDuration = duration - aaDuration - aaStartTime;
    const editorSize = "1080px";
  
    return (
      <>
        {/* Smart Sign On Text */}
        <SSOTitle startTime={startTime} duration={duration} />
  
        <AbsoluteFill
          style={{
            marginLeft: "1000px",
            marginTop: "250px",
          }}
        >
          {/* Browser Background */}
          <Icons
            sequenceName="Browser"
            images={["browser.svg"]}
            imageStyles={{
              height: editorSize,
              width: editorSize,
              marginLeft: "-195px",
              marginTop: "-240px",
            }}
            startTime={startTime}
            duration={duration}
            frame={frame}
            fps={fps}
          />
  
          {/* Creating Smart Accounts */}
          <AccountAbstraction
            startTime={aaStartTime}
            duration={aaDuration}
            frame={frame}
            fps={fps}
          />
  
          {/* Sessions */}
          <Sessions
            startTime={sessionsStartTime}
            duration={sessionsDuration}
            frame={frame}
            fps={fps}
          />
        </AbsoluteFill>
      </>
    );
  };
  
  