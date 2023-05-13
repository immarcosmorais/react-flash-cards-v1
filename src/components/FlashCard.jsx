import React, { useEffect, useState } from "react";

export default function FlashCard({
  id,
  title = "Titulo do FlashCard",
  description = "Descrição do FlashCard",
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? "text-xl" : "text-sn";
  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className={`shadow-lg  m-2 p-4 w-80 h-48 cursor-pointer
                flex flex-row items-center 
                justify-center font-semibold ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
