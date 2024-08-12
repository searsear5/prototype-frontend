"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type guilded = {
  guildID: number;
  guild: string;
};
const Guild = ({ guild }: { guild: guilded }) => {
  const handleDel = async (): Promise<any> => {
    const del = await axios.delete(
      `https://prototype-backend-plum.vercel.app/guild/${guild.guildID}`
    );
    location.reload();
  };
  return (
    <div className="flex justify-center border-solid border-2 border-[#008080] bg-[#008080] text-white rounded-2xl p-2 text-xs">
      <div className="">{guild.guild}</div>
      <div className="px-2">
        <button onClick={handleDel}>x</button>
      </div>
    </div>
  );
};
export default Guild;
