import React, { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

export default function FlachCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);
  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }

  function handleRadioButtonShowTitle() {
    const updatedCards = [...allCards].map((card) => ({
      ...card,
      showTitle: false,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleRadioButtonShowDescription() {
    const updatedCards = [...allCards].map((card) => ({
      ...card,
      showTitle: true,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setAllCards(updatedCards);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonCLick={handleButtonClick}>Embaralhar cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="idRadioButttonShowTittle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonCLick={handleRadioButtonShowTitle}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="idRadioButttonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonCLick={handleRadioButtonShowDescription}
          >
            Mostrar Descrição
          </RadioButton>
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
