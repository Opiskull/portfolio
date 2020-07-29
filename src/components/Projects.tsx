import { Project } from "./Project";
import React from "react";
import tw, { styled } from "twin.macro";

const List = styled.div`
  ${tw`flex-wrap flex justify-center`}
`;

const Title = styled.div`
  ${tw`m-auto p-4 text-center text-2xl`}
`;

export const Projects = ({ projects }: { projects: any[] }) => {
  if (projects.length == 0) {
    return <> </>;
  }

  return (
    <div>
      <Title>Projects</Title>
      <List>
        {projects.map((_, i) => (
          <Project
            key={i}
            url={_.url}
            title={_.title}
            description={_.description}
          ></Project>
        ))}
      </List>
    </div>
  );
};
