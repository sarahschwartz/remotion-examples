import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Title } from "./Utils/Title";

interface SmartContractProps extends OverviewProps {
  readonly pageStyles: React.CSSProperties;
  readonly codeStyles: React.CSSProperties;
  readonly titleStyles?: React.CSSProperties;
  readonly arrowStyles?: React.CSSProperties;
  readonly codeFile?: string;
}

export const SmartContracts = ({
  frame,
  fps,
  startTime,
  duration,
  titleStyles,
  codeStyles,
  pageStyles,
  arrowStyles,
  codeFile
}: SmartContractProps) => {
  return (
    <>
      {arrowStyles && (
        <Icons
          sequenceName="Arrow"
          images={["arrow.svg"]}
          imageStyles={arrowStyles}
          startTime={startTime}
          duration={duration}
          frame={frame}
          fps={fps}
        />
      )}

      <Icons
        sequenceName="Smart Contracts"
        images={["pages.svg"]}
        imageStyles={pageStyles}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
      <Icons
        sequenceName="Code"
        images={[codeFile || "code.svg"]}
        imageStyles={codeStyles}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
      {titleStyles && (
        <Title
          startTime={startTime}
          duration={duration}
          text="Smart Contracts"
          name="Smart Contracts"
          style={titleStyles}
        />
      )}
    </>
  );
};
