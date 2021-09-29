import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export const ICON_SIZE = 24;
export type IconName = "thumb" | "heart";
export type IconType = "solid" | "hollow";

type FAIConPros = {
  name: IconName;
  type?: IconType;
};

const FAIcon = ({ name, type = "hollow" }: FAIConPros) => {
  if (name === "thumb") {
    return (
      <FontAwesome
        name={`thumbs${type === "hollow" ? "-o" : ""}-up`}
        size={ICON_SIZE}
        color="black"
      />
    );
  }

  return (
    <FontAwesome
      name={`heart${type === "hollow" ? "-o" : ""}`}
      size={ICON_SIZE}
      color="black"
    />
  );
};

export default FAIcon;
