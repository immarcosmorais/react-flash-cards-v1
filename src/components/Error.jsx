export default function Error({ children: message }) {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap">
      <p className="text-red-500">{message}</p>
    </div>
  );
}
