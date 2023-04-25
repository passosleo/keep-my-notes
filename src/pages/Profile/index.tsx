import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { CustomTextInput } from "../../components/CustomTextInput";
import { useProfileForm } from "./hooks/useProfileForm";
import { ProfileWrapper, ButtonsWrapper } from "./styles";

export function ProfilePage() {
  const { profile, setProfile, handleUpdateProfile, handleUploadPhoto } =
    useProfileForm();
  const navigate = useNavigate();
  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <img
        src={
          profile.photo ??
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/315px-Blank_woman_placeholder.svg.png"
        }
        alt="avatar"
        width="100"
        height="100"
      />
      <input
        type="file"
        title="Change photo"
        onChange={({ target }) => handleUploadPhoto(target)}
      />
      <CustomTextInput
        label="Name"
        value={profile.name}
        onChange={({ target }) =>
          setProfile({ ...profile, name: target.value })
        }
      />

      <ButtonsWrapper>
        <CustomButton
          variant="outline"
          title="Cancel"
          onClick={() => navigate("/")}
        />
        <CustomButton
          title="Save"
          onClick={() => {
            handleUpdateProfile(profile);
            navigate("/");
          }}
        />
      </ButtonsWrapper>
    </ProfileWrapper>
  );
}
