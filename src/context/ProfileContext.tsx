import { createContext, useState, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Profile, ProfileContextType } from "../@types";
import defaultPhoto from "../assets/images/default-photo.png";

const ProfileContext = createContext({} as ProfileContextType);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { getStoredValue, storeValue } = useLocalStorage();

  const storedProfile: Profile = getStoredValue("profile");

  const defaultProfile: Profile = {
    name: "Anonymous",
    photo: defaultPhoto,
  };

  const [profile, setProfile] = useState<Profile>(
    storedProfile ?? defaultProfile
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
