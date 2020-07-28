import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 14rem;
  height: 10rem;
  box-shadow: 0 0 2rem #888;
  margin: 1rem;
  padding: 1rem;
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
      <h2>{title}</h2>
      <div>{description}</div>
      {url ? <a href={url}>Open</a> : ""}
    </Wrapper>
  );
};
