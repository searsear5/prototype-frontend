"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EducationAll from "./components/educationall";
import ExperienceAll from "./components/expall";
import SkillAll from "./components/skillall";
import InterestAll from "./components/interestall";
import GuildAll from "./components/guildall";

export default function Home() {
  const rounter = useRouter();
  type educated = {
    year: string;
    university: string;
    educationID: number;
  };
  type exp = {
    experience: string;
    expID: number;
  };
  type skill = {
    skillID: number;
    skill: string;
    skilllevel: string;
  };

  type interested = {
    interest: string;
    interestID: number;
  };
  type guilded = {
    guildID: number;
    guild: string;
  };

  //user
  const [username, setUsername] = useState<string>("tester");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [startingdate, setStartingdate] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [coverimage, setCoverimage] = useState<string>("");
  //information
  const [address, setAddress] = useState<string>("");
  const [subdistrict, setSubdistrict] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [postalcode, setPostalcode] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [lineID, setLineID] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  //education
  const [education, setEducation] = useState<educated[]>([]);
  //experience
  const [experience, setExperience] = useState<exp[]>([]);
  //skill
  const [skillall, setSkillall] = useState<skill[]>([]);
  //interest
  const [interestall, setInterestall] = useState<interested[]>([]);
  //guild
  const [guildall, setGuildall] = useState<guilded[]>([]);
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    rounter.push("/edit");
  };
  const AddEducation = (event: React.MouseEvent<HTMLButtonElement>) => {
    rounter.push("/addEducation");
  };
  const AddExperience = (event: React.MouseEvent<HTMLButtonElement>) => {
    rounter.push("/addExperience");
  };
  const AddSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    rounter.push("/addSkill");
  };
  const AddInterest = () => {
    rounter.push("/addInterest");
  };
  const AddGuild = () => {
    rounter.push("/addGuild");
  };

  const responseUser = async (): Promise<any> => {
    const user = await axios.get(
      `https://prototype-backend-plum.vercel.app/user`
    );
    //console.log(user.data.data[0]);
    const data = user.data.data[0];
    setUsername(data.username);
    setFirstname(data.firstname);
    setLastname(data.lastname);
    setNickname(data.nickname);
    setPosition(data.position);
    setNationality(data.nationality);
    setTelephone(data.phone);
    setStartingdate(data.startdate);
    setImage(data.image);
    setCoverimage(data.coverimage);
  };
  const responseInformation = async (): Promise<any> => {
    const info = await axios.get(
      "https://prototype-backend-plum.vercel.app/information"
    );
    //console.log(info.data.data[0]);
    const data = info.data.data[0];
    setAddress(data.address);
    setDistrict(data.district);
    setSubdistrict(data.subdistrict);
    setProvince(data.province);
    setPostalcode(data.postalcode);
    setFacebook(data.facebook);
    setLineID(data.lineID);
    setInstagram(data.instagram);
  };

  const responseEdu = async (): Promise<any> => {
    const edu = await axios.get(
      "https://prototype-backend-plum.vercel.app/education"
    );
    console.log(edu.data.data);
    const dataedu = edu.data.data;
    setEducation(dataedu);
  };

  const responseExp = async (): Promise<any> => {
    const exp = await axios.get(
      "https://prototype-backend-plum.vercel.app/experience"
    );
    const dataexp = exp.data.data;
    setExperience(dataexp);
    console.log(dataexp);
  };

  const responseSkill = async (): Promise<any> => {
    const skill = await axios.get(
      "https://prototype-backend-plum.vercel.app/skill"
    );
    const dataskill = skill.data.data;
    console.log(dataskill);
    setSkillall(dataskill);
  };

  const responseInterest = async (): Promise<any> => {
    const interest = await axios.get(
      "https://prototype-backend-plum.vercel.app/interest"
    );
    const dataInt = interest.data.data;
    setInterestall(dataInt);
  };

  const responseGuild = async (): Promise<any> => {
    const guild = await axios.get(
      "https://prototype-backend-plum.vercel.app/guild"
    );
    const dataguild = guild.data.data;
    setGuildall(dataguild);
  };
  useEffect(() => {
    responseUser();
    responseInformation();
    responseEdu();
    responseExp();
    responseSkill();
    responseInterest();
    responseGuild();
  }, []);
  return (
    <main className="h-full">
      <div className="flex flex-col m-5 ">
        <div className="flex flex-col w-100vh h-[520px] bg-white p-5 m-5 rounded-xl shadow-lg">
          <div className="text-lg font-semibold mb-5">USER INFORMATION</div>

          <div className="bg-white w-100vh shadow-md rounded-lg overflow-hidden h-full flex flex-col mx-5">
            <div className="relative h-[200px] bg-pink-100">
              <img
                className="relative h-[200px] bg-pink-100"
                src={coverimage}
                alt=""
              />
              <button
                onClick={handleEdit}
                className="absolute top-3 right-3 bg-white border border-gray-300 text-sm px-3 py-1 rounded-lg"
              >
                Edit Cover Photo
              </button>
            </div>
            <div className="flex  justify-start items-start">
              <div
                id="pic"
                className="flex justify-start items-start relative w-48 h-48 bg-gray-300 rounded-full border-4 border-white -mt-24 mx-10 "
              >
                <img
                  src={image}
                  alt=""
                  className="flex text-center align-text-center justify-start items-start relative w-48 h-48 bg-gray-300 rounded-full border-4 border-white -mt-26 mx-0 "
                />
                <button
                  onClick={handleEdit}
                  className="absolute bottom-0 right-0 bg-white border border-gray-300 text-xs px-2 py-1 rounded-full"
                >
                  Edit
                </button>
              </div>
              <div id="inputcol1" className="flex flex-col mx-8">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm"
                  >
                    USERNAME
                  </label>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-400 rounded-md"
                    value={username}
                    readOnly
                  />
                </div>
                <div>
                  <label
                    htmlFor="FIRST NAME"
                    className="block text-gray-700 text-sm"
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={firstname}
                    className="border-solid border-2 border-gray-400 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="POSITION"
                    className="block text-gray-700 text-sm"
                  >
                    POSITION
                  </label>
                  <select
                    id="position"
                    name="position"
                    disabled
                    className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                  >
                    <option value="">{position}</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="TELEPHONE NUMBER"
                    className="block text-gray-700 text-sm"
                  >
                    TELEPHONE NUMBER
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={telephone}
                    className="border-solid border-2 border-gray-400 rounded-md"
                  />
                </div>
              </div>
              <div id="inputcol2" className="flex flex-col mx-8">
                <div>
                  <label
                    htmlFor="NICK NAME"
                    className="block text-gray-700 text-sm"
                  >
                    NICK NAME
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={nickname}
                    className="border-solid border-2 border-gray-400 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="LASTNAME"
                    className="block text-gray-700 text-sm"
                  >
                    LASTNAME
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={lastname}
                    className="border-solid border-2 border-gray-400 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="NATIONALITY"
                    className="block text-gray-700 text-sm"
                  >
                    NATIONALITY
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={nationality}
                    className="border-solid border-2 border-gray-400 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="startdate" className="block text-gray-700">
                    Starting Date
                  </label>
                  <input
                    type="date"
                    id="startdate"
                    readOnly
                    value={startingdate}
                    name="startdate"
                    className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-100vh h-60 bg-white p-5 m-5 rounded-xl">
          <div className="font-bold">CONTACT INFORMATION</div>
          <div className="flex flex-col justify-center">
            <div className="mx-auto w-full">
              <label
                htmlFor="ADDRESS"
                className="block text-gray-700 text-sm my-1"
              >
                ADDRESS
              </label>
              <input
                type="text"
                id="ADDRESS"
                readOnly
                value={address}
                name="ADDRESS"
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mx-auto w-full flex justify-between">
              <div>
                <label
                  htmlFor="SUB DISTRICT"
                  className="block text-gray-700 text-sm"
                >
                  SUB DISTRICT
                </label>
                <select
                  id="subdistrict"
                  name="subdistrict"
                  disabled
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                >
                  <option value={subdistrict}>{subdistrict}</option>
                  <option value="sub district1">sub district1</option>
                  <option value="sub district2">sub district2</option>
                  <option value="sub district3">sub district3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="DISTRICT"
                  className="block text-gray-700 text-sm"
                >
                  DISTRICT
                </label>
                <select
                  id="district"
                  name="district"
                  disabled
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                >
                  <option value={district}>{district}</option>
                  <option value="district1">district1</option>
                  <option value="district2">district2</option>
                  <option value="district3">district3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="PROVINCE"
                  className="block text-gray-700 text-sm"
                >
                  PROVINCE
                </label>
                <select
                  id="PROVINCE"
                  name="PROVINCE"
                  disabled
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                >
                  <option value={province}>{province}</option>
                  <option value="PROVINCE1">PROVINCE1</option>
                  <option value="PROVINCE2">PROVINCE2</option>
                  <option value="PROVINCE3">PROVINCE3</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="POSTAL CODE"
                  className="block text-gray-700 text-sm"
                >
                  POSTAL CODE
                </label>
                <select
                  id="POSTAL CODE"
                  name="POSTAL CODE"
                  disabled
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
                >
                  <option value={postalcode}>{postalcode}</option>
                  <option value="POSTAL CODE1">POSTAL CODE1</option>
                  <option value="POSTAL CODE2">POSTAL CODE2</option>
                  <option value="POSTAL CODE3">POSTAL CODE3</option>
                </select>
              </div>
            </div>
            <div className="mx-auto w-full flex justify-between">
              <div>
                <label
                  htmlFor="FACEBOOK"
                  className="block text-gray-700 text-sm"
                >
                  FACEBOOK
                </label>
                <input
                  type="text"
                  readOnly
                  value={facebook}
                  className="border-solid border-2 border-gray-400 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="LINE ID"
                  className="block text-gray-700 text-sm"
                >
                  LINE ID
                </label>
                <input
                  type="text"
                  readOnly
                  value={lineID}
                  className="border-solid border-2 border-gray-400 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="INSTAGRAM"
                  className="block text-gray-700 text-sm"
                >
                  INSTAGRAM
                </label>
                <input
                  type="text"
                  readOnly
                  value={instagram}
                  className="border-solid border-2 border-gray-400 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100vh h-40 bg-white p-5 m-5 rounded-xl">
          <div className="flex font-bold">EDUCATIONAL INFORMATION</div>
          <div className="flex flex-col mx-40 px-20">
            <div>
              <button
                onClick={AddEducation}
                className="bg-white text-[#008080] border border-[#008080] text-xs rounded-xl p-1"
              >
                ADD EDUCATION
              </button>
            </div>
            <div>
              <EducationAll education={education} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100vh h-40 bg-white p-5 m-5 rounded-xl">
          <div className="flex font-bold">EXPERIENCE INFORMATION</div>
          <div className="flex flex-col mx-40 px-20">
            <div>
              <button
                onClick={AddExperience}
                className="bg-white text-[#008080] border border-[#008080] text-xs rounded-xl p-1"
              >
                ADD EXPERIENCE
              </button>
            </div>
            <div>
              <ExperienceAll experience={experience} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100vh h-40 bg-white p-5 m-5 rounded-xl">
          <div className="font-bold">SKILL INFORMATION</div>
          <div className="flex mx-40 px-20">
            <div>
              <button
                onClick={AddSkill}
                className="bg-white text-[#008080] border border-[#008080] text-xs rounded-xl p-1"
              >
                ADD SKILL
              </button>
            </div>
            <div className="flex">
              <SkillAll skillall={skillall} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100vh h-40 bg-white p-5 m-5 rounded-xl">
          <div className="font-bold">INTERESTS INFORMATION</div>
          <div className="flex flex-col mx-40 px-20">
            <div>
              <button
                onClick={AddInterest}
                className="bg-white text-[#008080] border border-[#008080] text-xs rounded-xl p-1"
              >
                ADD INTEREST
              </button>
            </div>
            <div className="flex py-2">
              <InterestAll interestall={interestall} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100vh h-40 bg-white p-5 m-5 rounded-xl">
          <div className="font-bold">GUILD INFORMATION</div>
          <div className="flex flex-col mx-40 px-20">
            <div>
              <button
                onClick={AddGuild}
                className="bg-white text-[#008080] border border-[#008080] text-xs rounded-xl p-1"
              >
                ADD GUILD
              </button>
            </div>
            <div className="flex py-2">
              <GuildAll guildall={guildall} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
