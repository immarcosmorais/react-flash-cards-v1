import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";
import { apiGetAllFlashCards } from "../services/apiService";

export default function FlachCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCards() {
      const backEndAllCards = await apiGetAllFlashCards();
      setAllCards(backEndAllCards);
    }
    getAllCards();
    setLoading(false);
  }, []);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(studyCards);
    setStudyCards(shuffledCards);
  }

  useEffect(() => {
    setStudyCards(allCards.map((card) => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleRadioButtonShowTitle() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: false,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleRadioButtonShowDescription() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: true,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setStudyCards(updatedCards);
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
          {studyCards.map(({ id, title, description, showTitle }) => {
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
