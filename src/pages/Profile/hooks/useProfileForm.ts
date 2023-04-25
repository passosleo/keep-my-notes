import { useState } from "react";
import { useProfileContext } from "../../../context/ProfileContext";
import { Profile } from "../../../@types";

export function useProfileForm() {
  const { profile, handleUpdateProfile } = useProfileContext();
  const [newProfile, setNewProfile] = useState<Profile>(profile);

  function handleUploadPhoto(target: EventTarget & HTMLInputElement) {
    const { files } = target;
    const photo = files?.[0];
    if (!photo) return;
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => {
      setNewProfile({ ...newProfile, photo: reader.result as string });
    };
  }

  return {
    profile: newProfile,
    setProfile: setNewProfile,
    handleUploadPhoto,
    handleUpdateProfile,
  };
}
