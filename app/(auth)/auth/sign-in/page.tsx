import React from "react";
import Image from "next/image";
import SignInFormClient from "@/modules/auth/components/sign-in-form-client";

const Page = () => {
  return (
    <>
      <Image
        src={"/login.svg"}
        alt="Login-Image"
        height={300}
        width={300}
        loading="eager"
        className="m-6 h-auto w-75 object-cover"
      />
      <SignInFormClient />
    </>
  );
};

export default Page;
