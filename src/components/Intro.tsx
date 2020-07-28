import React from "react";
import styled from "styled-components";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 20rem;
  height: 20rem;
  margin-top: 10%;
  box-shadow: 0 0 2rem #888;
  padding: 1rem;
  font-size: 1.25rem;
  position: relative;
`;

const SocialConnections = styled.div`
  position: absolute;
  bottom: 0rem;
`;

const SocialConnection = styled.a`
  display: inline-block;
  margin: 1rem;
  font-size: 2rem;
  outline: none;
  color: black;
  &:hover {
    color: orange;
  }
`;

export const Intro = () => {
  return (
    <Wrapper>
      Hello! My name is Christian Onuk and I'm a software developer. This is my
      first draft of a portfolio page.
      <SocialConnections>
        <SocialConnection href="https://linkedin" target="_blank">
          <LinkedinOutlined></LinkedinOutlined>
        </SocialConnection>
        <SocialConnection href="https://github.com/opsikull" target="_blank">
          <GithubOutlined></GithubOutlined>
        </SocialConnection>
        <SocialConnection href="mailto:opi@peerzone.net" target="_blank">
          <MailOutlined></MailOutlined>
        </SocialConnection>
      </SocialConnections>
    </Wrapper>
  );
};
