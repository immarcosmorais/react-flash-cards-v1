import React, { useEffect, useState } from "react";

export default function FlashCard({
  title = "Titulo do FlashCard",
  description = "Descrição do FlashCard",
  showFlashCardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }

  const fontSizeClassName = showTitle ? "text-xl" : "text-sn";
  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className={`shadow-lg  m-2 p-4 w-80 h-48 cursor-pointer
                flex flex-row items-center 
                justify-center font-semibold ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
