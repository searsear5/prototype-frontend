"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Interest from "./interest";
type interested = {
  interestID: number;
  interest: string;
};
const InterestAll = ({ interestall }: { interestall: interested[] }) => {
  const render = interestall.map((interest: interested) => {
    return (
      <div className="px-2">
        {" "}
        <Interest key={interest.interestID} interest={interest} />
      </div>
    );
  });
  return <div className="flex justify-center">{render}</div>;
};
export default InterestAll;
