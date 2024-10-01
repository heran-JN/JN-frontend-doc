import React from "react";
import MultipleSelector from "./multi-select-v1";

type Props = {
  options: { label: string; value: string }[];
  placeholder: string;
  emptyIndicator: React.ReactNode;
  defaultOptions: { label: string; value: string }[];
  creatable: boolean;
};

const MultiSelectV1Component = ({
  options,
  creatable,
  defaultOptions,
  placeholder,
  emptyIndicator,
}: Props) => {
  return (
    <>
      <MultipleSelector
        creatable
        defaultOptions={defaultOptions}
        options={options}
        placeholder={placeholder}
        emptyIndicator={emptyIndicator}
      />
    </>
  );
};

export default MultiSelectV1Component;
