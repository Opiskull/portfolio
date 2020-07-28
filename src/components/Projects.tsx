import { Project } from "./Project";
import React from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`;

export const Projects = ({ projects }: { projects: any[] }) => {
  if (projects.length == 0) {
    return <> </>;
  }

  return (
    <div>
      <Title>Projects</Title>
      <List>
        {projects.map((_) => (
          <Project
            url={_.url}
            title={_.title}
            description={_.description}
          ></Project>
        ))}
      </List>
    </div>
  );
};
