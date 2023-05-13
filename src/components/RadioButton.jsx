import { getNewId } from "../services/idService";

export default function RadioButton({
  id = getNewId(),
  name = "name",
  buttonChecked = false,
  onButtonCLick = null,
  children: buttonDescricption = "Descrição do botão",
}) {
  function handleRadioButtonChange() {
    if (onButtonCLick) {
      onButtonCLick();
    }
  }

  return (
    <div className=" flex flex-row items-center space-x-2">
      <input
        id={id}
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id}>{buttonDescricption}</label>
    </div>
  );
}
