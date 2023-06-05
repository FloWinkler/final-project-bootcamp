import { useState, useRef, useEffect } from "react";
import {
  SettingsDropdownContainer,
  ThemeWrapper,
  ToggleContainer,
  Toggle,
  ToggleLabel,
  Overlay,
  LanguageSelect,
  LanguageIcon,
  SettingsIcon,
  DarkModeIcon,
} from "./SettingsDropdownStyles";


const SettingsDropdown = () => {
  const [settingsOpen, setSettingOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const dropdownRef = useRef(null);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
  ];

  const toggleSettings = () => {
    setSettingOpen(!settingsOpen);
  }

  const r = document.querySelector(':root');

  const toggleLight = () => {
    setIsDarkMode(false);
    r.style.setProperty("--background-color", "#FAFAFA");
    r.style.setProperty("--plate-color", "#FFFFFF");
    r.style.setProperty("--primary-text-color", "#525252");
    r.style.setProperty("--secondary-text-color", "#949494");
    r.style.setProperty("--button-background-color", "#79CFF2");
    r.style.setProperty("--button-text-color", "#525252");
    r.style.setProperty("--highlight-color", "#79CFF2");
    r.style.setProperty("--box-shadow-color", "#00000040");
  }

  const toggleDark = () => {
    setIsDarkMode(true);
    r.style.setProperty("--background-color", "#1E1E1E");
    r.style.setProperty("--plate-color", "#121212");
    r.style.setProperty("--primary-text-color", "#FFFFFF");
    r.style.setProperty("--secondary-text-color", "#949494");
    r.style.setProperty("--button-background-color", "#79CFF2");
    r.style.setProperty("--button-text-color", "#525252");
    r.style.setProperty("--highlight-color", "#79CFF2");
    r.style.setProperty("--box-shadow-color", "#000000");
  }

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? toggleLight() : toggleDark();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <SettingsIcon onClick={toggleSettings} />
      {settingsOpen && (
        <>
          <Overlay />
          <SettingsDropdownContainer ref={dropdownRef}>
            <ThemeWrapper>
              <ToggleContainer>
                <DarkModeIcon />
                <ToggleLabel htmlFor="darkModeToggle">Dark Mode</ToggleLabel>
                <Toggle id="darkModeToggle" type="checkbox" checked={isDarkMode} onChange={handleToggle} />
              </ToggleContainer>
              <ToggleContainer>
                <LanguageIcon />
                <ToggleLabel htmlFor="langSelect">Language:</ToggleLabel>
                <LanguageSelect value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </LanguageSelect>
              </ToggleContainer>
            </ThemeWrapper>
          </SettingsDropdownContainer>
        </>
      )}
    </>
  );
};

export default SettingsDropdown;