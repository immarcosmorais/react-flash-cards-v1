export default function FlashCards({ children: flashcars }) {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap">
      {flashcars}
    </div>
  );
}
