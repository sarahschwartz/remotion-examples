import { Composition } from "remotion";
import "./styles.css";
import { FPS } from "./constants";
import { ShortsVertical } from "./ShortsVertical";
import { SSO } from "./SSO";
import { SSOCronos } from "./SSOCronos";
import { ZKGame } from "./ZKGame";
// import { ZKSlido } from "./zk-slido";
import { Solx } from "./solx";
import { ZKArch } from "./ZK-Architecture";

export const RemotionRoot = () => {
  const shortMin = 0;
  const shortSeconds = (60 * shortMin) + 36;

  const ssoMin = 2;
  const ssoSeconds = (60 * ssoMin) + 2;

  const ssoCronosMin = 2;
  const ssoCronosSeconds = (60 * ssoCronosMin) + 16;

  const gameMin = 0;
  const gameSeconds = (60 * gameMin) + 57;
  
  // const slidoMin = 0;
  // const slidoSeconds = (60 * slidoMin) + 59;

  const solxMin = 2;
  const solxSeconds = (60 * solxMin) + 29;

  const zkArchMin = 4;
  const zkArcSeconds = (60 * zkArchMin) + 32;

  return (
    <div>
      <Composition
        id="ZKGame"
        component={ZKGame}
        durationInFrames={FPS * gameSeconds}
        fps={FPS}
        width={2000}
        height={1600}
      />
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
      <Composition
        id="SSOCronos"
        component={SSOCronos}
        durationInFrames={FPS * ssoCronosSeconds}
        fps={FPS}
        width={1920}
        height={1080}
      />
      
      {/* <Composition
        id="ZKSlido"
        component={ZKSlido}
        durationInFrames={FPS * slidoSeconds}
        fps={FPS}
        width={1920}
        height={1080}
      /> */}
      <Composition
        id="Solx"
        component={Solx}
        durationInFrames={FPS * solxSeconds}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="zkArcSeconds"
        component={ZKArch}
        durationInFrames={FPS * zkArcSeconds}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </div>
  );
};

