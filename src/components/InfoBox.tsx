import { type ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

interface WarningBoxProps {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "hint";
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
