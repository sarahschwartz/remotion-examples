import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FPSFactor } from "../constants";
import { Arch } from "./Arch";
import { AuthServerRole } from "./AuthServerRole";
import { Features } from "./Features";
import { Intro } from "./Intro";
import { OneClick } from "./OneClick";
import { Overview } from "./Overview";
import { PassKeySecurity } from "./PasskeySecurity";
import { Verified } from "./Verified";
import { Sessions } from "./Sessions";
import { SessionReview } from "./SessionReview";
import SSOCode from "../CodeHike/sso";

export const SSOCronos = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const OVERVIEW_START = 0 * FPSFactor;
  const OVERVIEW_DURATION = (310 + 30) * FPSFactor;

  const FEATURES_START = 475 * FPSFactor;
  const FEATURES_DURATION = 880 * FPSFactor;

  const ARCH_START = FEATURES_START + FEATURES_DURATION;
  const ARCH_DURATION = 300 * FPSFactor;

  const AUTH_SERVER_START = ARCH_START + ARCH_DURATION;
  const AUTH_SERVER_DURATION = 320 * FPSFactor;

  const PASSKEYS_START = AUTH_SERVER_START + AUTH_SERVER_DURATION;
  const PASSKEYS_DURATION = 290 * FPSFactor;

  const VERIFIED_START = PASSKEYS_START + PASSKEYS_DURATION;
  const VERIFIED_DURATION = 80 * FPSFactor;

  const SESSIONS_START = VERIFIED_START + VERIFIED_DURATION;
  const SESSIONS_DURATION = 360 * FPSFactor;

  const REVIEW_START = SESSIONS_START + SESSIONS_DURATION;
  const REVIEW_DURATION = 260 * FPSFactor;

  const ONE_CLICK_START = REVIEW_START + REVIEW_DURATION;
  const ONE_CLICK_DURATION = 160 * FPSFactor;

  const CODE_START = ONE_CLICK_START + ONE_CLICK_DURATION;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "black",
          width: "3000px",
          height: "3000px",
        }}
      />
      <Sequence
      from={20 * FPSFactor}
      name="Audio"
      >
      <Audio volume={0.5} src={staticFile("cronos.mp3")} />

      </Sequence>

      {/* ZKsync SSO */}
      <Intro
        frame={frame}
        fps={fps}
        startTime={OVERVIEW_START}
        duration={OVERVIEW_DURATION}
      />

      {/* Features & How it works */}
      <Overview
        frame={frame}
        fps={fps}
        startTime={OVERVIEW_START}
        duration={OVERVIEW_DURATION}
      />

      {/* Features List */}
      <Features
        frame={frame}
        fps={fps}
        startTime={FEATURES_START}
        duration={FEATURES_DURATION}
      />

      {/* Auth Server + Smart Contracts */}
      <Arch
        frame={frame}
        fps={fps}
        startTime={ARCH_START}
        duration={ARCH_DURATION}
      />

      {/* Auth Server Role */}
      <AuthServerRole
        frame={frame}
        fps={fps}
        startTime={AUTH_SERVER_START}
        duration={AUTH_SERVER_DURATION}
      />

      {/* Passkey Security */}
      <PassKeySecurity
        frame={frame}
        fps={fps}
        startTime={PASSKEYS_START}
        duration={PASSKEYS_DURATION}
      />

      {/* Verified */}
      <Verified
        frame={frame}
        fps={fps}
        startTime={VERIFIED_START}
        duration={VERIFIED_DURATION}
      />

      {/* Sessions */}
      <Sessions
        frame={frame}
        fps={fps}
        startTime={SESSIONS_START}
        duration={SESSIONS_DURATION}
      />

      {/* Reviewing Sessions */}
      <SessionReview
        frame={frame}
        fps={fps}
        startTime={REVIEW_START}
        duration={REVIEW_DURATION}
      />

      {/* One Click Sign In */}
      <OneClick
        frame={frame}
        fps={fps}
        startTime={ONE_CLICK_START}
        duration={ONE_CLICK_DURATION}
      />

      {/* Code */}
      <SSOCode startTime={CODE_START}/>
      <Sequence
        from={CODE_START}
        // durationInFrames={CODE_DURATION}
        name="Code"
      >
        <Audio src={staticFile("sso-code.mp4")} />
        </Sequence>
    </AbsoluteFill>
  );
};
