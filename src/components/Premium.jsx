import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/premium/verify", {
        withCredentials: true,
      });
      if (res.data.isPremium) {
        setIsUserPremium(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return isUserPremium ? (
    <h1 className="text-center mt-10 text-2xl">
      You are already a premium user.
    </h1>
  ) : (
    <div className="m-10 text-center text-xl">
      <h1 className="mb-4 text-3xl font-bold">Premium Feature Coming Soon</h1>
      <p>This feature is currently disabled.</p>
    </div>
  );
};

export default Premium;
