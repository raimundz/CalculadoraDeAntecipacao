import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 231px;
  height: 389px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #d1dce32e;

  .line {
    width: 161px;
    display: flex;
    border-bottom: 1px solid #3d75bb;
    opacity: 0.3;
    margin-left: 35px;
  }
  .textReceived {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #3d75bb;
    margin: 0px;
    margin-bottom: 4px;
    margin-left: 35px;
  }
  h3 {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 46px;
    margin: 0px;
    margin-left: 35px;
    color: #5d9cec;
  }
`;
