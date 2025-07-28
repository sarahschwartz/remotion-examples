import { CodeAnnotation, Token } from "codehike/code";

export interface Step {
    code: {
        code: string;
        meta: string;
        style: React.CSSProperties;
        value: string;
        lang: string;
        tokens: (string | Token)[];
        annotations: CodeAnnotation[];
        themeName: string;
    };
    duration: number;
    title?: string | undefined;
    children?: React.ReactNode;
  };