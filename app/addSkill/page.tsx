"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddSkill = () => {
  const router = useRouter();
  const [skill, setSkill] = useState<string>("");
  const [skilllevel, setSkilllevel] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://prototype-backend-plum.vercel.app/addSkill",
        {
          skill,
          skilllevel,
        }
      );
      router.push("/");
    } catch (error) {
      console.log("Error during add skill", error);
    }
  };
  return (
    <div className="flex my-24 justify-center">
      <form onSubmit={handleSubmit} action="">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="addskill" className="block text-gray-700 text-sm">
            skill
          </label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border-solid border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="addskill level"
            className="block text-gray-700 text-sm"
          >
            <p>skill level (level 1- level 10)</p>
          </label>
          <input
            type="text"
            value={skilllevel}
            onChange={(e) => setSkilllevel(e.target.value)}
            className="border-solid border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-md text-white my-5"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddSkill;
