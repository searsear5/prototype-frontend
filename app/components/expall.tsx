"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Exp from "./exp";
type exp = {
  experience: string;
  expID: Number;
};
const ExperienceAll = ({ experience }: { experience: exp[] }) => {
  const render = experience.map((exp: exp) => {
    return <Exp exp={exp} />;
  });
  return <div className="flex justify-center">{render}</div>;
};
export default ExperienceAll;
