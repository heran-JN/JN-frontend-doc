import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  variant?: "default" | "small";
};

function ExpandIcon({ className }: Props) {
  return (
    <svg
      className={clsx("", className)}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path d="M9 7.5L6 10.5L3 7.5" />
      <path d="M3 4.5L6 1.5L9 4.5" />
    </svg>
  );
}

export default ExpandIcon;
