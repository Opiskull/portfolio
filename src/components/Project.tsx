import React from "react";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`shadow-2xl p-4 m-4 h-40 w-56`}
`;

const Title = styled.a`
  ${tw`text-xl hover:text-orange-500`}
`;

const Description = styled.div`
  ${tw`text-sm`}
`;

export const Project = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) => {
  return (
    <Wrapper>
      <Title href={url}>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
