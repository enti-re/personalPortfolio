import React from "react";
import { ToggleLeft, ToggleRight } from "react-feather";

export const Header = (props: any) => {
  return (
    <div className="fixed px-8 py-2 flex flex-row gap-3 justify-end w-full text-lg bg-white">
      <div className="underline">About</div>
      <div className="underline">Projects</div>
      <div className="underline">Contact</div>
      {!props.colorToggle && (
        <div
          className="flex flex-row gap-2"
          onClick={() => {
            props.setColoToggle(true);
          }}
        >
          <div>Play</div>
          <ToggleLeft className="cursor-pointer flex flex-row" size={32} />
        </div>
      )}
      {props.colorToggle && (
        <div
          className="flex flex-row gap-2"
          onClick={() => {
            props.setColoToggle(false);
          }}
        >
          <div>Play</div>
          <ToggleRight className="cursor-pointer" size={32} />
        </div>
      )}
    </div>
  );
};
