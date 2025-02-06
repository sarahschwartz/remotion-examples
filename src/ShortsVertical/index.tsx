import { AbsoluteFill, Img, staticFile } from "remotion";
import { VideoWithBorder } from "./VideoWithBorder";
import { Subtitle } from "./Subtitle";

export const ShortsVertical = () => {
  
  let time = 0

  const subtitles = [{
    text: "If you ever",
    duration: 40
  },
{
    text: "develop a dapp",
    duration: 40
},
{
    text: "and you",
    duration: 80
},
{
    text: "start seeing",
    duration: 60
},
{
    text: "multiple people",
    duration: 80
},
{
    text: "try and use it",
    duration: 80
},
]
  return (
    <AbsoluteFill
      style={{
        height: "100%",
        width: "100%",
        background: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <VideoWithBorder filepath="sarah-short-1.mp4" volume={0} />
      <VideoWithBorder filepath="sarah-short-1.mp4" volume={0} />
      <VideoWithBorder filepath="sarah-short-1.mp4" />

      <AbsoluteFill>
         <Img
        src={staticFile("zksync-color.jpg")}
        style={{ width: "150px", height: "150px", margin: "10px" }}
      />
      </AbsoluteFill>

      {subtitles.map((subtitle, index) => {
          time += subtitles[index - 1]?.duration || 0;
        return (
          <Subtitle
            key={index}
            text={subtitle.text}
            startTime={time}
            duration={subtitle.duration}
          />
        )
      })}
    </AbsoluteFill>
  );
};
