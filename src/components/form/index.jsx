import { Formulario } from "./styles";

export const CalcForm = ({ register, handleSubmit, requestData }) => {
  return (
    <Formulario onChange={handleSubmit(requestData)}>
      <h1 className="mainText">Simule sua Antecipação</h1>
      <label>
        Informe o valor da venda *
        <input type="text" placeholder="Ex: 1000" {...register("amount")} />
      </label>
      <label>
        Em quantas parcelas *
        <input type="text" placeholder="Ex: 5" {...register("installments")} />
        <h2 className="textAdvice">Máximo de 12 parcelas</h2>
      </label>
      <label>
        Informe o percentual de MDR *
        <input type="text" placeholder="Ex: 12" {...register("mdr")} />
      </label>
    </Formulario>
  );
};
