export default function Button({
  children: description = "Descrição do botão",
  onButtonCLick = null,
}) {
  function handleButtonCLick() {
    if (onButtonCLick) {
      onButtonCLick();
    }
  }
  return (
    <button
      className="bg-gray-200 p-2  m-1 rounded-md"
      onClick={handleButtonCLick}
    >
      {description}
    </button>
  );
}
