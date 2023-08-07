"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPostData, setUserPostData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPostData(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page`}
      data={userPostData}
    ></Profile>
  );
};

export default UserProfile;
