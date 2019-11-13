import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
  background-color: #eeeeee;
`;

export const Content = styled.div<{
  state: boolean;
}>`
  width: 200px;
  height: 200px;
  background-color: #ffa990;
  transform: translateX(${props => (props.state ? "0" : "-100%")});
  transition: transform linear 200ms;
`;
