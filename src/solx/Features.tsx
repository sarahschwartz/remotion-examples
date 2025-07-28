import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Title } from "./Utils/Title";

export const Features = ({ frame, fps, startTime, duration }: OverviewProps) => {
    const size = 120;
    const images = ["circle-check.svg"];
  
    const titleStyles = {
      fontSize: 72,
      color: "white",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      left: "460px",
      top: "-20px",
    } as React.CSSProperties;
  
    const imageStyles = {
      flexDirection: "column",
      height: size,
      width: size,
    } as React.CSSProperties;
  
    const listItems: {title: string, time: number}[] = [
     {title: "Passkey-based authentication", time: 210},
     {title: "Configurable sessions", time: 470},
      {title: "No installs", time: 742},
      {title: "No seed phrase or private key", time: 960},
      {title: "Modular smart accounts", time: 1150},
      {title: "Accounts can easily be recovered", time: 1320},
    ];
  
    const listStyles = {
      fontSize: 48,
      color: "white",
      left: "260px",
      fontWeight: "normal",
    } as React.CSSProperties;
    
    return (
      <>
        <Title
          startTime={startTime - 25}
          duration={duration}
          text="SSO Features"
          name="SSO Features"
          style={titleStyles}
        />
  
        <div
          className="inter-400"
          style={{ display: "flex", flexDirection: "column", gap: "80px" }}
        >
          {listItems.map((item, index) => {
            const top = 210 + index * 120;
            const marginTop = 270 + index * 120;
            const thisStartTime = startTime + item.time;
            const thisDuration = duration - item.time;
            return (
              <div key={index}>
                <Icons
                  sequenceName="Features Icons"
                  images={images}
                  imageStyles={{
                    ...imageStyles,
                    marginTop: `${marginTop}px`,
                    marginLeft: "100px",
                  }}
                  startTime={thisStartTime - 25}
                  duration={thisDuration + 25}
                  frame={frame}
                  fps={fps}
                />
  
                <Title
                  startTime={thisStartTime}
                  duration={thisDuration}
                  text={item.title}
                  name="Feature List Item"
                  style={{ ...listStyles, top: `${top}px` }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };
  
  