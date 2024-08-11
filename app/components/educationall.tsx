"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Education from "./education";
type educated = {
  year: string;
  university: string;
};
const EducationAll = ({ education }: { education: educated[] }) => {
  const render = education.map((edu: educated) => {
    return <Education edu={edu} />;
  });
  return <div className="flex justify-center">{render}</div>;
};
export default EducationAll;
