import React from "react";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLinks = () => {
  return (
    <SignOutButton>
      <button>Logout</button>
    </SignOutButton>
  );
};

export default SignOutLinks;
