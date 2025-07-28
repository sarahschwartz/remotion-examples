import { AbsoluteFill, staticFile, OffthreadVideo } from "remotion";

export const VideoWithBorder = ({ filename }: { readonly filename: string}) => {

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#322075",
      }}
    >
      <div
        style={{
          width: '100%',
          height: "100%",
          border: "4px solid white",
          overflow: "hidden",
          borderRadius: "8px",
          position: "relative",
          // marginLeft: videoOffset,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            width: "100%",
            height: "100%",
          }}
        >
          <OffthreadVideo
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={staticFile(filename)}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
