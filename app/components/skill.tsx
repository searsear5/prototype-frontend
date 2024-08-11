"use client";

type skill = {
  skillID: number;
  skill: string;
  skilllevel: string; // Skill level as a percentage
};

const Skill = ({ skill }: { skill: skill }) => {
  const percent = Number(skill.skilllevel) * 10;
  return (
    <div className="flex flex-col justify-center border-solid border-2 border-white rounded-md p-2 mb-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 text-xs px-10">{skill.skill}</span>
        <span className="text-gray-700 text-xs">{skill.skilllevel}</span>
        <div className="w-[200px] ml-4 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full w-[100px]"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
