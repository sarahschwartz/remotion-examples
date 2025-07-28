import { CSSProperties } from "react";

const word = {
  marginBottom: 10,
  display: "inline-block",
  // background: 'rgba(255, 255, 255, 0.1)',
  padding: '4px 8px',
  borderRadius: '8px',
};

interface TitleProps {
  readonly titleText: string;
  readonly titleColor: string;
  readonly fontSize?: number;
  readonly styles?: CSSProperties;
}

export const StaticTitle = ({ titleText, titleColor, fontSize, styles}: TitleProps) => {

  const words = titleText.split(" ");

  const title = {
    fontWeight: "bold",
    fontSize: fontSize || 180,
  };

  const titleStyles = styles ?? word;

  return (
    <div className="inter-400" style={title}>
      {words.map((t) => {
       
        return (
          <span
            key={t}
            style={{
              ...titleStyles,
              color: titleColor,
            }}
          >
            {t}
          </span>
        );
      })}
    </div>
  );
};
