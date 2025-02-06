import { staticFile, OffthreadVideo } from "remotion";

interface VideoWithBorderProps {
  readonly filepath: string;
  readonly volume?: number;
}

export const VideoWithBorder = ({
  filepath,
  volume
}: VideoWithBorderProps) => {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "640px",
          width: '100%',
          border: "4px solid white",
          overflow: "hidden",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <OffthreadVideo
          volume={volume ?? 1}
          style={{
            position: "absolute",
            width: "100%",
            height: '100%',
            objectFit: "cover",
          }}
          src={staticFile(filepath)}
        />
      </div>
    </div>
  );
};