import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { Title } from "./Utils/Title";

interface AuthServerProps extends OverviewProps {
  readonly serverSize: string;
  readonly styles?: React.CSSProperties;
  readonly text?: string;
}

export const AuthServer = ({
  frame,
  fps,
  serverSize,
  startTime,
  duration,
  styles,
  text = "Auth Server",
}: AuthServerProps) => {
  return (
    <>
      <Icons
        sequenceName="Auth Server"
        images={["browser.svg"]}
        imageStyles={{
          height: serverSize,
          width: serverSize,
        }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
      {styles && (
        <Title
          startTime={startTime}
          duration={duration}
          text={text}
          name={`${text} Title`}
          style={styles}
        />
      )}
    </>
  );
};
