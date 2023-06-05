import { HeaderContainer, ArrowIcon, Btn, BtnText, LinksContainer, LinkWrapper, HeaderContainerWithoutBackButton } from "./HeaderStyles"
import SettingsDropdown from "./SettingsMenu/SettingsDropdown"
import UserDropdown from "./UserMenu/UserDropdown"
import { useLocation } from "react-router-dom"

const Header = () => {
  const url = useLocation();

  const handleGoBack = () => {
    window.history.back()
  }

  if (url.pathname === '/') {
    return (
      <HeaderContainerWithoutBackButton>
        <LinksContainer>
          <LinkWrapper>
            <SettingsDropdown />
          </LinkWrapper>
          <LinkWrapper>
            <UserDropdown />
          </LinkWrapper>
        </LinksContainer>
      </HeaderContainerWithoutBackButton>
    );
  } else {
    return (
      <HeaderContainer>
        <Btn onClick={handleGoBack}>
          <ArrowIcon />
          <BtnText >Back</BtnText>
        </Btn>
        <LinksContainer>
          <LinkWrapper>
            <SettingsDropdown />
          </LinkWrapper>
          <LinkWrapper>
            <UserDropdown />
          </LinkWrapper>
        </LinksContainer>
      </HeaderContainer>
    );
  }
}

export default Header;