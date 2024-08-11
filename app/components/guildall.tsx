"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Guild from "./guild";
type guilded = {
  guildID: number;
  guild: string;
};
const GuildAll = ({ guildall }: { guildall: guilded[] }) => {
  const render = guildall.map((guild: guilded) => {
    return (
      <div className="px-2">
        <Guild guild={guild} />
      </div>
    );
  });
  return <div className="flex ">{render}</div>;
};
export default GuildAll;
