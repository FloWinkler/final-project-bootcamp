import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 17px;
  max-width: 310px;
  margin: 19px 0;
`;

export const TabButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) => (props.active ? "2px solid var(--highlight-color)" : "none")};
  border-radius: 10px;
  background-color: var(--plate-color);
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 92px;
  height: 64px;
`;

export const FAUserIcon = styled(FaUserAlt)`
  height: 15px;
  width: 15px;
  color: ${(props) => (props.active ? "var(--highlight-color)" : "var(--secondary-text-color)")};
`;

export const StatsIcon = styled(IoStatsChart)`
  height: 15px;
  width: 15px;
  color: ${(props) => (props.active ? "var(--highlight-color)" : "var(--secondary-text-color)")};
`;

export const EventsIcon = styled(BsFillCalendarCheckFill)`
  height: 15px;
  width: 15px;
  color: ${(props) => (props.active ? "var(--highlight-color)" : "var(--secondary-text-color)")};
`;

export const TabIcon = styled.i`
  font-size: 32px;
  color: var(--secondary-text-color);
`;

export const TabText = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 7px;
  color: var(--primary-text-color);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 310px;
  height: 500px;
  background-color: var(--plate-color);
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
`;