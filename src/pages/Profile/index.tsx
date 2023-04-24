import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { ProfileWrapper } from "./styles";

export default function Profile() {
  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/315px-Blank_woman_placeholder.svg.png"
        alt="avatar"
        width="100"
        height="100"
      />
      <CustomButton
        title="Change photo"
        onClick={() => console.log("change photo")}
      />
      <CustomTextInput label="Name" value="Anonymous" />
      <CustomButton title="Save" onClick={() => console.log("save")} />
    </ProfileWrapper>
  );
}
