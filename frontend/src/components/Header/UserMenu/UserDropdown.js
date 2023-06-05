import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserIcon,
  UserAvatar,
  UserDropdownContainer,
  UserThemeWrapper,
  UserForm,
  UserInputWrapper,
  LoginButton,
  UserButtonWrapper,
  UserNameText,
  UserProfileAvatar,
  UserInfoWrapperLeft,
  UserInfoWrapperRight,
  UserInfoText,
  UserInfoSmallText,
  UserIconUserProfile,
  StatisticsIconProfile,
  EventsIconProfile,
  StyledNavLink,
} from "./UserDropdownStyles";
import { Overlay } from "../SettingsMenu/SettingsDropdownStyles";
import { updateUserData, logout } from "../../../redux/slices/auth";
import truevrAPI from "../../../axios/truevrAPI";
import defaultAvatar from "../../../assets/default_user_avatar.png";

const UserDropdown = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const handleLogout = async () => {
    dispatch(logout());
  };

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLinkClick = () => {
    setUserOpen(false);
  }

  const handleLogin = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      const response = await truevrAPI.post("/auth/token/", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        dispatch(updateUserData({ username }));
        localStorage.setItem('userInfo', JSON.stringify({ username }));
        setUserOpen(false);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (access_token && userInfo) {
      dispatch(updateUserData(userInfo));
    }
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      {isLoggedIn ? (
        <UserAvatar
          src={userInfo.avatarUrl || defaultAvatar}
          alt="User Avatar"
          onClick={toggleUser}
        />
      ) : (
        <UserIcon onClick={toggleUser} />
      )}
      {userOpen && (
        <>
          <Overlay />
          <UserDropdownContainer ref={dropdownRef}>
            <UserThemeWrapper>
              {!isLoggedIn ? (
                <UserForm>
                  <UserInputWrapper>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={handleUsernameInput}
                    />
                  </UserInputWrapper>
                  <UserInputWrapper>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                  </UserInputWrapper>
                  <UserButtonWrapper>
                    <LoginButton text="Login" onClick={handleLogin} />
                  </UserButtonWrapper>
                </UserForm>
              ) : (
                <>
                <UserInfoWrapperLeft>
                    <UserNameText>{userInfo.username}</UserNameText>
                    <UserProfileAvatar src={userInfo.avatarUrl || defaultAvatar} />
                    <LoginButton onClick={handleLogout} text="Logout" />
                  </UserInfoWrapperLeft>
                  <UserInfoWrapperRight>
                    <StyledNavLink to="/profile" activeClassName="active" onClick={handleLinkClick}>
                      <UserInfoText><UserIconUserProfile/>Profile</UserInfoText>
                      <UserInfoSmallText>Your Profile</UserInfoSmallText>
                    </StyledNavLink>
                    <UserInfoText><StatisticsIconProfile/>Statistics</UserInfoText>
                    <UserInfoSmallText>Check your Stats!</UserInfoSmallText>
                    <UserInfoText><EventsIconProfile/>Events</UserInfoText>
                    <UserInfoSmallText>Your Events</UserInfoSmallText>
                  </UserInfoWrapperRight>
                </>
              )}
            </UserThemeWrapper>
          </UserDropdownContainer>
        </>
      )}
    </>
  );
};

export default UserDropdown;