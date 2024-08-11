"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
type educated = {
  year: string;
  university: string;
};

const Education = ({ edu }: { edu: educated }) => {
  return (
    <div className="flex justify-center">
      <div>{edu.year}</div>
      <div>
        {" "}
        <img src="/image/minus-regular-24.png" alt="" />
      </div>
      <div>{edu.university}</div>
    </div>
  );
};
export default Education;
