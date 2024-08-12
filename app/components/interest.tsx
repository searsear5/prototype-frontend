"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type interested = {
  interestID: number;
  interest: string;
};
const Interest = ({ interest }: { interest: interested }) => {
  const handleDel = async (): Promise<any> => {
    const del = await axios.delete(
      `https://prototype-backend-plum.vercel.app/interest/${interest.interestID}`
    );
    location.reload();
  };
  return (
    <div className="flex justify-center border-solid border-2 border-[#008080] bg-[#008080] text-white rounded-2xl p-2 text-xs">
      <div>{interest.interest}</div>
      <div className="px-5">
        <button onClick={handleDel}>x</button>
      </div>
    </div>
  );
};
export default Interest;
