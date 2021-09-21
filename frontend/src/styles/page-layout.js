import styled from 'styled-components';

export const PageContainer = styled.div`
  //min-height: 100vh;
  min-width: 100%;
  width: fit-content;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 5vw;
  margin: 0;
  overflow: hidden;
`;

export const PageContent = styled.div`
  //min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  //overflow: hidden;
  //border: solid red;
`;
