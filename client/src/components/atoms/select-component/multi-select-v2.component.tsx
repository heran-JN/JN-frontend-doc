import React from "react";
import { MultiSelect } from "./multi-select-v2";
import { Icons } from "@/components/icons/icon.component";
type OptionType = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};
type MultiSelectV2ComponentProps = {
  placeholder: string;
  defaultValue: string[];
  options: OptionType[];
  size: "small" | "default";
  onChange: (value: string[]) => void;
};

const MultiSelectV2Component = ({
  size,
  placeholder,
  defaultValue,
  options,
  onChange,
}: MultiSelectV2ComponentProps) => {
  return (
    <>
      <MultiSelect
        options={options}
        onValueChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        animation={2}
        maxCount={3}
        size={size}
        variant="default"
      />
    </>
  );
};

export default MultiSelectV2Component;
