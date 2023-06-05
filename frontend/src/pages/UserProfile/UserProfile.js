import React, { useState } from "react";
import {
  Container,
  Title,
  TabsContainer,
  TabsWrapper,
  TabButton,
  TabText,
  ContentContainer,
  FAUserIcon,
  StatsIcon,
  EventsIcon,
} from "./UserProfileStyles"
import ProfileContent from "./ProfileTab/ProfileContent";
import StatsContent from "./StatsTab/StatsContent";
import EventsContent from "./EventsTab/EventsContent";
import ViewTitle from '../../components/ViewTitle/ViewTitle'

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container>
      <ViewTitle title="User Profile" />
      <TabsWrapper>
        <TabButton active={activeTab === "profile"} onClick={() => handleTabClick("profile")}>
          <FAUserIcon active={activeTab === "profile"} />
          <TabText>Profile</TabText>
        </TabButton>
        <TabButton active={activeTab === "stats"} onClick={() => handleTabClick("stats")}>
          <StatsIcon active={activeTab === "stats"} />
          <TabText>Statistics</TabText>
        </TabButton>
        <TabButton active={activeTab === "events"} onClick={() => handleTabClick("events")}>
          <EventsIcon active={activeTab === "events"} />
          <TabText>Events</TabText>
        </TabButton>
      </TabsWrapper>
      <ContentContainer>
        {activeTab === "profile" && <ProfileContent />}
        {activeTab === "stats" && <StatsContent />}
        {activeTab === "events" && <EventsContent />}
      </ContentContainer>
    </Container >
  );
};

export default UserProfile;
