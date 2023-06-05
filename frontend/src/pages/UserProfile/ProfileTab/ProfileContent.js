import Button from "../../../components/Button/Button";
import { ButtonWraper, Form, ImgWrapper, InputWraper, ProfileContainer } from "./ProfileContentStyles";
import defaultAvatar from "../../../assets/default_user_avatar.png";

const ProfileContent = () => {
  return (
    <ProfileContainer>
      <ImgWrapper>
        <img src={defaultAvatar} alt="use avatar"></img>
        <p>Change profile picture</p>
      </ImgWrapper>
      <Form>
        <InputWraper>
          <label>Username</label>
          <input type='text' value="Marta"></input>
        </InputWraper >
        <InputWraper>
          <label>E-mail</label>
          <input type='email' value="marta@email.com"></input>
        </InputWraper>
        <InputWraper>
          <label>Phone</label>
          <input type='text' value="077 777 77 77"></input>
        </InputWraper>
        <ButtonWraper>
          <Button text='Edit profile' />
        </ButtonWraper>
      </Form >
    </ProfileContainer>
  );
}

export default ProfileContent;