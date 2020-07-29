import React from "react";
import tw, { styled } from "twin.macro";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Wrapper = styled.div`
  ${tw`shadow-xl p-4 relative text-base w-64 h-56 m-auto mt-4 bg-black text-white`}
`;

const SocialConnections = styled.div`
  ${tw`absolute bottom-0 left-0`}
`;

const SocialConnection = styled.a`
  ${tw`m-4 text-3xl hover:text-orange-500 inline-block`}
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
