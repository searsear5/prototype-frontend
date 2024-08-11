"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddGuild = () => {
  const router = useRouter();
  const [guild, setGuild] = useState<string>("");
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/addguild", {
        guild,
      });
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
            guild
          </label>
          <input
            type="text"
            value={guild}
            onChange={(e) => setGuild(e.target.value)}
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
export default AddGuild;
