import React, { useEffect, useState } from "react";
import { auth, db } from "../components/Firebase.jsx";
import { toast } from "react-toastify";
import { getDoc, doc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {userDetails ? (
        <>
          <h2>Welcome {userDetails.name}</h2>
          <div>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;