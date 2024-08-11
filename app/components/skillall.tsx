"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Skill from "./skill";
type skill = {
  skillID: number;
  skill: string;
  skilllevel: string;
};

const SkillAll = ({ skillall }: { skillall: skill[] }) => {
  const render = skillall.map((skill: skill) => {
    return <Skill skill={skill} />;
  });
  return <div className="w-100vh">{render}</div>;
};
export default SkillAll;
