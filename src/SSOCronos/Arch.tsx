import { AuthServer } from "./AuthServer";
import { SmartContracts } from "./SmartContracts";
import { OverviewProps } from "./types";

export const Arch = ({ frame, fps, startTime, duration }: OverviewProps) => {
    const defaultStyles = {
      fontSize: 62,
      color: "white",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    } as React.CSSProperties;
  
    const titleStyles = {
      ...defaultStyles,
      left: "160px",
      top: "520px",
      width: "400px",
      height: "400px",
    } as React.CSSProperties;
  
    const pageSize = "600px";
    const codeSize = "260px";
    const arrowSize = "800px";
    const contractTitleStyles = {
      ...defaultStyles,
      left: "1200px",
      top: "520px",
      width: "550px",
      height: "400px",
    } as React.CSSProperties;
  
    const codeStyles = {
      height: codeSize,
      width: codeSize,
      marginLeft: "1380px",
      marginTop: "180px",
    } as React.CSSProperties;
  
    const pageStyles = {
      height: pageSize,
      width: pageSize,
      marginLeft: "1160px",
      marginTop: "20px",
    } as React.CSSProperties;
  
    const arrowStyles = {
      height: arrowSize,
      width: arrowSize,
      marginLeft: "740px",
      marginTop: "80px",
    } as React.CSSProperties;
  
    return (
      <>
        <AuthServer
          frame={frame}
          fps={fps}
          serverSize="760px"
          startTime={startTime}
          duration={duration}
          styles={titleStyles}
        />
        <SmartContracts
          frame={frame}
          fps={fps}
          startTime={startTime}
          duration={duration}
          codeStyles={codeStyles}
          titleStyles={contractTitleStyles}
          pageStyles={pageStyles}
          arrowStyles={arrowStyles}
        />
      </>
    );
  };
  