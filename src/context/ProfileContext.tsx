import { createContext, useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Profile, ProfileContextType } from "../@types";
import defaultPhoto from "../assets/images/default-photo.png";

const ProfileContext = createContext({} as ProfileContextType);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { getStoredValue, storeValue } = useLocalStorage();

  const storedProfile = getStoredValue("profile");

  const [profile, setProfile] = useState<Profile>(
    storedProfile ?? {
      name: "Anonymous",
      photo: defaultPhoto,
    }
  );

  function handleUpdateProfile(profile: Profile) {
    setProfile(profile);
    storeValue("profile", profile);
  }

  return (
    <ProfileContext.Provider value={{ profile, handleUpdateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => {
  return useContext(ProfileContext);
};
