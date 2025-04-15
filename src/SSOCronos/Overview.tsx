import { FPSFactor } from "../constants";
import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Title } from "./Utils/Title";

export const Overview = ({ frame, fps, startTime, duration }: OverviewProps) => {
    const featuresStartTime = startTime + duration + 15;
    const featuresDuration = 110 * FPSFactor;
    const size = 250;
    const images = ["circle-check.svg"];
  
    const imageStyles = {
      flexDirection: "column",
      height: size,
      width: size,
    } as React.CSSProperties;
  
    const textStyles = {
      fontSize: 88,
      color: "white",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      left: "380px",
    } as React.CSSProperties;
  
    return (
      <>
        <Icons
          spinIcons
          sequenceName="Features Icons"
          images={images}
          imageStyles={{
            ...imageStyles,
            marginTop: "180px",
            marginLeft: "100px",
          }}
          startTime={featuresStartTime}
          duration={featuresDuration}
          frame={frame}
          fps={fps}
        />
  
        <Title
          startTime={featuresStartTime}
          duration={featuresDuration}
          text="SSO Features"
          name="Features"
          style={{ ...textStyles, top: "90px" }}
        />
  
        <Icons
          spinIcons
          sequenceName="How Icon"
          images={images}
          imageStyles={{
            ...imageStyles,
            marginTop: "580px",
            marginLeft: "100px",
          }}
          startTime={featuresStartTime + 30}
          duration={featuresDuration - 30}
          frame={frame}
          fps={fps}
        />
  
        <Title
          startTime={featuresStartTime}
          duration={featuresDuration}
          text="How SSO Works"
          name="How"
          style={{ ...textStyles, top: "490px" }}
        />
      </>
    );
  };
  