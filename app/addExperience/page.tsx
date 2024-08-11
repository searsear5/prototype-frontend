"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddExperience = () => {
  const router = useRouter();
  const [experience, setExperience] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/addExperience", {
        experience,
      });
      //(e.target as HTMLFormElement).reset();
      router.push("/");
    } catch (error) {
      console.log("Error during editing", error);
    }
  };
  return (
    <div className="flex my-24 justify-center">
      <form onSubmit={handleSubmit} action="">
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="addexperience"
            className="block text-gray-700 text-sm"
          >
            experience
          </label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
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
export default AddExperience;
