import { Composition } from "remotion";
import "./styles.css";
import { FPS } from "./constants";
import { ShortsVertical } from "./ShortsVertical";
import { SSO } from "./SSO";

export const RemotionRoot = () => {
  const shortMin = 0;
  const shortSeconds = (60 * shortMin) + 36;

  const ssoMin = 2;
  const ssoSeconds = (60 * ssoMin) + 2;

  return (
    <div>
      <Composition
        id="ShortsVertical"
        component={ShortsVertical}
        durationInFrames={FPS * shortSeconds}
        fps={FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="SSO"
        component={SSO}
        durationInFrames={FPS * ssoSeconds}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </div>
  );
};

