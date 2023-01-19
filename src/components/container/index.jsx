import { Container } from "./styles";
import { CalcForm } from "../form";
import { Result } from "../result";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export const MainContainer = () => {
  const { register, handleSubmit } = useForm();
  const data = { 1: 0, 15: 0, 30: 0, 90: 0 };
  const [responseData, setResponseData] = useState({ data });

  const requestData = (data) => {
    if (data.amount != "" && data.installments != "" && data.mdr != "") {
      axios
        .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
        .then((response) => setResponseData(response))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <CalcForm
        register={register}
        handleSubmit={handleSubmit}
        requestData={requestData}
      />
      <Result responseData={responseData} />
    </Container>
  );
};
