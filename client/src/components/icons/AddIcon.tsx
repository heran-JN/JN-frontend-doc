import React from "react";

type Props = {
  className?: string;
  variant?: "default" | "small";
};

function AddIcon({ variant = "default" }: Props) {
  return (
    <>
      {variant === "default" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          stroke="currentColor"
        >
          <line
            x1="18.4995"
            y1="26.8268"
            x2="18.4995"
            y2="10.1768"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
          <line
            x1="10.175"
            y1="18.5021"
            x2="26.825"
            y2="18.5021"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
        </svg>
      )}
      {variant === "small" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          stroke="currentColor"
        >
          <line
            x1="8.4998"
            y1="12.3258"
            x2="8.49981"
            y2="4.67581"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          <line
            x1="4.675"
            y1="8.50096"
            x2="12.325"
            y2="8.50096"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
}

export default AddIcon;
