import { Img, staticFile } from "remotion";
import { Title } from "../Utils/Title";

export const ZKsync = () => {
  return (
    <div style={{display: 'flex'}}>
      <Img
        src={staticFile("zksync.png")}
        style={{ width: "150px", height: "150px", marginLeft: "10px" }}
      />
      <Title titleText="ZKsync" titleColor="black" fontSize={120} />
    </div>
  );
};
