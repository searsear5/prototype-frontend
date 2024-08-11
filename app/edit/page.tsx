"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPage = () => {
  //user
  const router = useRouter();
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
  const [error, setError] = useState("");
  //information
  const [address, setAddress] = useState<string>("");
  const [subdistrict, setSubdistrict] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [postalcode, setPostalcode] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [lineID, setLineID] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !username ||
      !firstname ||
      !lastname ||
      !nickname ||
      !position ||
      !nationality ||
      !telephone ||
      !startingdate ||
      !address ||
      !subdistrict ||
      !district ||
      !province ||
      !postalcode
    ) {
      setError("Please complete all input");
      return;
    }
    try {
      const res = await axios.put("http://localhost:8080/editUser", {
        username,
        firstname,
        lastname,
        nickname,
        position,
        nationality,
        phone: telephone,
        startdate: startingdate,
        coverimage,
        image,
      });
      const resinfo = await axios.put("http://localhost:8080/editinfo", {
        address,
        subdistrict,
        district,
        province,
        postalcode,
        facebook,
        lineID,
        instagram,
      });
      if (res && resinfo) {
        setError("");
        (e.target as HTMLFormElement).reset();
        router.push("/");
      }
    } catch (error) {
      console.log("Error during editing", error);
    }
  };

  return (
    <div className="flex flex-col mt-32">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editUSERNAME"
              className="block text-gray-700 text-sm"
            >
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editFIRST NAME"
              className="block text-gray-700 text-sm"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editLAST NAME"
              className="block text-gray-700 text-sm"
            >
              LAST NAME
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editNICK NAME"
              className="block text-gray-700 text-sm"
            >
              NICK NAME
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editNATIONALITY"
              className="block text-gray-700 text-sm"
            >
              NATIONALITY
            </label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editPOSITION"
              className="block text-gray-700 text-sm"
            >
              POSITION
            </label>
            <select
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="position1">Position 1</option>
              <option value="position2">Position 2</option>
              <option value="position3">Position 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editTELEPHONE"
              className="block text-gray-700 text-sm"
            >
              TELEPHONE NUMBER
            </label>
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editSTARTING DATE"
              className="block text-gray-700 text-sm"
            >
              STARTING DATE
            </label>
            <input
              type="date"
              value={startingdate}
              onChange={(e) => setStartingdate(e.target.value)}
              id="startdate"
              name="startdate"
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="editimage" className="block text-gray-700 text-sm">
              IMAGE URL-not require
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editcoverimage"
              className="block text-gray-700 text-sm"
            >
              COVERIMAGE URL-not require
            </label>
            <input
              type="text"
              value={coverimage}
              onChange={(e) => setCoverimage(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="ADDRESS"
              className="block text-gray-700 text-sm my-1"
            >
              ADDRESS
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="editsub district"
              className="block text-gray-700 text-sm"
            >
              sub district
            </label>
            <select
              id="sub district"
              name="sub district"
              value={subdistrict}
              onChange={(e) => setSubdistrict(e.target.value)}
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="sub district1">sub district 1</option>
              <option value="sub district2">sub district 2</option>
              <option value="sub district3">sub district 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="edit district"
              className="block text-gray-700 text-sm"
            >
              sub district
            </label>
            <select
              id="district"
              name="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="district1">district 1</option>
              <option value="district2">district 2</option>
              <option value="district3">district 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="edit province"
              className="block text-gray-700 text-sm"
            >
              province
            </label>
            <select
              id="province"
              name="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="province1">province 1</option>
              <option value="province2">province 2</option>
              <option value="province3">province 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="edit postal code"
              className="block text-gray-700 text-sm"
            >
              postal code
            </label>
            <select
              id="postal code"
              name="postal code"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              className="mt-1 block p-1 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="postal code1">postal code 1</option>
              <option value="postal code2">postal code 2</option>
              <option value="postal code3">postal code 3</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="FACEBOOK"
              className="block text-gray-700 text-sm my-1"
            >
              FACEBOOK-not require
            </label>
            <input
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="LINE ID"
              className="block text-gray-700 text-sm my-1"
            >
              LINE ID-not require
            </label>
            <input
              type="text"
              value={lineID}
              onChange={(e) => setLineID(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="INSTAGRAM"
              className="block text-gray-700 text-sm my-1"
            >
              INSTAGRAM-not require
            </label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="border-solid border-2 border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-md text-white my-5"
          >
            SAVE
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default EditPage;
