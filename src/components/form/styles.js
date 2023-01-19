import styled from "styled-components";

export const Formulario = styled.form`
  height: 100%;
  width: 377px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .mainText {
    margin: 0px;
    margin-left: -15px;
    color: #656565;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 24px;
    line-height: 28px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;

    color: #656565;
  }

  .textAdvice {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
  }
  input {
    margin: 0px;
    padding: 0px;
    width: 250px;
    height: 37px;
    background-color: #ffffff;
    border: 1px solid #dde6e9;
    border-radius: 4px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;
    padding-left: 14px;
    color: black;
  }
`;
