import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

type OptionType = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type Props = {
  options: OptionType[];
};

const SingleSelectComponent = ({ options }: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="p-0">
        <SelectGroup className="p-0">
          {options.map(({ label, value }, i) => {
            return (
              <SelectItem className="m-0 py-[10px]" key={i} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SingleSelectComponent;
