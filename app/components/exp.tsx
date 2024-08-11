"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type exp = {
  experience: string;
  expID: Number;
};

const Exp = ({ exp }: { exp: exp }) => {
  const handleDel = async (): Promise<any> => {
    const del = await axios.delete(`http://localhost:8080/exp/${exp.expID}`);
    location.reload();
  };
  return (
    <div className="flex justify-center border-solid border-2 border-gray-400 rounded-md p-2">
      <div>{exp.experience}</div>
      <div className="px-5">
        <button onClick={handleDel}>x</button>
      </div>
    </div>
  );
};
export default Exp;
