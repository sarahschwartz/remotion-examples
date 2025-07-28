import { AbsoluteFill } from "remotion";
import { Icons } from "../SSO/Utils/Icons";
import { AuthServer } from "./AuthServer";
import { OverviewProps } from "./types";

export const AuthServerRole = ({ frame, fps, startTime, duration }: OverviewProps) => {
    const keyIconSize = "220px";
    const lockIconSize = "140px";
  
    const defaultStyles = {
      color: "white",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      width: "400px",
      height: "400px",
      textAlign: "center",
    } as React.CSSProperties;
  
    const titleStyles = {
      fontSize: 48,
      left: "70px",
      top: "380px",
      ...defaultStyles,
    } as React.CSSProperties;
  
    const appDefaultStyles = {
      fontSize: 42,
      ...defaultStyles,
    } as React.CSSProperties;
  
    const appTitleStyles = {
      left: "-30px",
      top: "220px",
      ...appDefaultStyles,
    } as React.CSSProperties;
  
    const appPositions = ["200px", "750px", "1300px"];
    const lag = 80;
  
    return (
      <>
        <AbsoluteFill style={{ marginLeft: "650px", marginTop: "350px" }}>
          <AuthServer
            frame={frame}
            fps={fps}
            serverSize="550px"
            startTime={startTime}
            duration={duration}
            styles={titleStyles}
          />
        </AbsoluteFill>
  
        <Icons
          sequenceName="Passkey Based Auth"
          images={["key.svg"]}
          imageStyles={{ height: keyIconSize, width: keyIconSize }}
          startTime={startTime}
          duration={duration}
          containerStyles={{ marginLeft: "800px", marginTop: "530px" }}
          frame={frame}
          fps={fps}
        />
  
        {appPositions.map((position, index) => (
          <AbsoluteFill key={index} style={{ marginLeft: position }}>
            <AuthServer
              frame={frame}
              fps={fps}
              serverSize="350px"
              startTime={startTime}
              duration={duration}
              styles={appTitleStyles}
              text="App"
            />
            <Icons
              sequenceName="Locks"
              images={["lock-open.svg"]}
              imageStyles={{ height: lockIconSize, width: lockIconSize }}
              startTime={startTime + (index + 1) * lag}
              duration={duration - (index + 1) * lag}
              containerStyles={{ marginLeft: "100px", marginTop: "112px" }}
              frame={frame}
              fps={fps}
            />
          </AbsoluteFill>
        ))}
      </>
    );
  };
  
  