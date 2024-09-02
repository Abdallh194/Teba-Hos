"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import { SwithLoggin } from "@/Redux/features/User/UserSlice";
const UserProfile = () => {
  //selector
  const { isLoggin } = useAppSelector((s) => s.User);

  //router
  const router = useRouter();

  //dispatch
  const dispatch = useAppDispatch();

  return (
    <>
      {isLoggin ? (
        <div>
          <h1>User Profile</h1>
          <Button
            onClick={() => {
              dispatch(SwithLoggin());
            }}
          >
            Logiout
          </Button>
        </div>
      ) : (
        router.push("/")
      )}
    </>
  );
};

export default UserProfile;
