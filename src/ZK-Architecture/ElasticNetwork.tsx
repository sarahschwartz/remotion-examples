import { AbsoluteFill, Img, staticFile } from "remotion";
import { GradientLine } from "./Utils/GradientLine";
// import { FPSFactor } from "../constants";

interface ElasticNetworkProps {
  readonly frame: number;
  readonly startTime: number;
  readonly delayFactor?: number;
}

export function ElasticNetwork({ frame, startTime, delayFactor = 20 }: ElasticNetworkProps) {
  const hexagonSize = "150px";

  const chainTextStyles: React.CSSProperties = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
  };

  // console.log("frame", frame)

  const chainLocations = [
    { left: 130, top: 70, showTime: startTime },
    { left: 120, top: 840, showTime: startTime + delayFactor * 2 },
    { left: 430, top: 700, showTime: startTime + delayFactor * 3 },
    { left: 620, top: 210, showTime: startTime + delayFactor * 4 },
    { left: 680, top: 540, showTime: startTime + delayFactor * 5 },
    { left: 1030, top: 100, showTime: startTime + delayFactor * 7 },
    { left: 1050, top: 850, showTime: startTime + delayFactor * 8 },
    { left: 1380, top: 780, showTime: startTime + delayFactor * 9 },
    { left: 1280, top: 320, showTime: startTime + delayFactor * 10 },
    { left: 1480, top: 20, showTime: startTime + delayFactor * 11 },
    { left: 1680, top: 900, showTime: startTime + delayFactor * 14 },
  ];

  const namedChainLocations = [
    {
      left: 180,
      top: 470,
      marginTop: "-110px",
      marginLeft: "40px",
      chainName: "Era",
      showTime: startTime + delayFactor,
    },
    {
      left: 720,
      top: 870,
      marginTop: "-110px",
      marginLeft: "20px",
      chainName: "Lens",
      showTime: startTime + delayFactor * 6,
    },
    {
      left: 1610,
      top: 350,
      marginTop: "-100px",
      marginLeft: "10px",
      chainName: "Abstract",
      fontSize: 28,
      showTime: startTime + delayFactor * 12,
    },
    {
      left: 1475,
      top: 650,
      marginTop: "-95px",
      marginLeft: "20px",
      chainName: "Sophon",
      fontSize: 28,
      showTime: startTime + delayFactor * 13,
    },
  ];

  const lines = [
    {
      top: 300,
      left: 140,
      width: "200px",
      rotation: "rotate(72deg)",
      showTime: startTime + delayFactor,
    },
    {
      top: 670,
      left: 50,
      width: "360px",
      rotation: "rotate(102deg)",
      showTime: startTime + delayFactor * 2,
    },
    {
      top: 600,
      left: 250,
      width: "290px",
      rotation: "rotate(62deg)",
      showTime: startTime + delayFactor * 3,
    },
    {
      top: 830,
      left: 240,
      width: "220px",
      rotation: "rotate(330deg)",
      showTime: startTime + delayFactor * 3,
    },
    {
      top: 195,
      left: 250,
      width: "400px",
      rotation: "rotate(17deg)",
      showTime: startTime + delayFactor * 4,
    },
    {
      top: 450,
      left: 595,
      width: "230px",
      rotation: "rotate(80deg)",
      showTime: startTime + delayFactor * 5,
    },
    {
      top: 690,
      left: 550,
      width: "170px",
      rotation: "rotate(325deg)",
      showTime: startTime + delayFactor * 5,
    },
    {
      top: 730,
      left: 705,
      width: "120px",
      rotation: "rotate(260deg)",
      showTime: startTime + delayFactor * 6,
    },
    {
      top: 830,
      left: 550,
      width: "200px",
      rotation: "rotate(15deg)",
      showTime: startTime + delayFactor * 6,
    },
    {
      top: 200,
      left: 750,
      width: "310px",
      rotation: "rotate(340deg)",
      showTime: startTime + delayFactor * 7,
    },
    {
      top: 850,
      left: 790,
      width: "290px",
      rotation: "rotate(20deg)",
      showTime: startTime + delayFactor * 8,
    },
    {
      top: 870,
      left: 1180,
      width: "220px",
      rotation: "rotate(340deg)",
      showTime: startTime + delayFactor * 9,
    },
    {
      top: 280,
      left: 1120,
      width: "210px",
      rotation: "rotate(50deg)",
      showTime: startTime + delayFactor * 10,
    },
    {
      top: 110,
      left: 1160,
      width: "340px",
      rotation: "rotate(350deg)",
      showTime: startTime + delayFactor * 11,
    },
    {
      top: 240,
      left: 1310,
      width: "270px",
      rotation: "rotate(310deg)",
      showTime: startTime + delayFactor * 11,
    },
    {
      top: 340,
      left: 1410,
      width: "260px",
      rotation: "rotate(350deg)",
      showTime: startTime + delayFactor * 12,
    },
        {
      top: 230,
      left: 1515,
      width: "210px",
      rotation: "rotate(50deg)",
      showTime: startTime + delayFactor * 12,
    },
    {
      top: 510,
      left: 1350,
      width: "200px",
      rotation: "rotate(60deg)",
      showTime: startTime + delayFactor * 13,
    },
    {
      top: 730,
      left: 1440,
      width: "140px",
      rotation: "rotate(120deg)",
      showTime: startTime + delayFactor * 13,
    },
    {
      top: 480,
      left: 1515,
      width: "210px",
      rotation: "rotate(120deg)",
      showTime: startTime + delayFactor * 13,
    },
    {
      top: 800,
      left: 1540,
      width: "260px",
      rotation: "rotate(65deg)",
      showTime: startTime + delayFactor * 14,
    },
    {
      top: 930,
      left: 1500,
      width: "210px",
      rotation: "rotate(25deg)",
      showTime: startTime + delayFactor * 14,
    },
  ];

  // const duration = 60 * FPSFactor;
  // const delay = startTime + 800 * FPSFactor;

  // const transformScale = interpolate(
  //   frame,
  //   [delay, delay + duration],
  //   [1, 0.5],
  //   { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  // );

  // const transform = `scale(${transformScale})`;

  return (
    <AbsoluteFill
      // style={{
      //   transform,
      //   transformOrigin: "center",
      // }}
    >
      {lines.map((line, index) =>
        line.showTime < frame ? (
          <AbsoluteFill
            key={index + line.rotation}
            style={{ top: line.top, left: line.left }}
          >
            <GradientLine
              height={6}
              width={line.width}
              duration={2}
              style={{ transform: line.rotation }}
            />
          </AbsoluteFill>
        ) : null,
      )}

      {chainLocations.map((location, index) =>
        location.showTime < frame ? (
          <AbsoluteFill key={index} style={location}>
            <Img
              src={staticFile("hexagon.svg")}
              style={{ width: hexagonSize, height: hexagonSize }}
            />
          </AbsoluteFill>
        ) : null,
      )}

      {namedChainLocations.map((location, index) =>
        location.showTime < frame ? (
          <AbsoluteFill key={index + location.chainName} style={location}>
            <Img
              src={staticFile("hexagon-filled.svg")}
              style={{ width: hexagonSize, height: hexagonSize }}
            />
            <div
              style={{
                marginTop: location.marginTop,
                marginLeft: location.marginLeft,
                ...chainTextStyles,
                fontSize: location.fontSize ?? 48,
              }}
            >
              {location.chainName}
            </div>
          </AbsoluteFill>
        ) : null,
      )}
    </AbsoluteFill>
  );
}
