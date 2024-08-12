"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Exp from "./exp";
type exp = {
  experience: string;
  expID: number;
};
const ExperienceAll = ({ experience }: { experience: exp[] }) => {
  const render = experience.map((exp: exp) => {
    return <Exp key={exp.expID} exp={exp} />;
  });
  return <div className="flex justify-center">{render}</div>;
};
export default ExperienceAll;
