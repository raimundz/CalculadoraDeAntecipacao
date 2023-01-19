import { ResultContainer } from "./styles";

export const Result = ({ responseData }) => {
  return (
    <ResultContainer>
      <h2 className="textReceived">VOCÊ RECEBERÁ:</h2>
      <div className="line"></div>
      {responseData == {} ? (
        <h3>
          Amanhã: <strong>R$02,00</strong>
        </h3>
      ) : (
        <h3>
          Amanhã: <strong>R${responseData.data[1]},00</strong>
        </h3>
      )}
      {responseData == {} ? (
        <h3>
          Em 15 dias: <strong>R$0,00</strong>
        </h3>
      ) : (
        <h3>
          Em 15 dias: <strong>R${responseData.data[15]},00</strong>
        </h3>
      )}
      {responseData == {} ? (
        <h3>
          Em 30 dias: <strong>R$0,00</strong>
        </h3>
      ) : (
        <h3>
          Em 30 dias: <strong>R${responseData.data[30]},00</strong>
        </h3>
      )}
      {responseData == {} ? (
        <h3>
          Em 90 dias: <strong>R$0,00</strong>
        </h3>
      ) : (
        <h3>
          Em 90 dias: <strong>R${responseData.data[90]},00</strong>
        </h3>
      )}
    </ResultContainer>
  );
};
