import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Puzzle } from 'lucide-react';

interface MemoryMandalaProps {
  onClose: () => void;
  onComplete: () => void;
}

interface Card {
  id: number;
  pattern: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryMandala({ onClose, onComplete }: MemoryMandalaProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const patterns = [
    '🌸', '🌺', '🌹', '🌷', '🌼', '🌻', '🍀', '🌿'
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matches === patterns.length && !gameCompleted) {
      setGameCompleted(true);
      onComplete();
    }
  }, [matches, gameCompleted, onComplete]);

  const initializeGame = () => {
    const duplicatedPatterns = [...patterns, ...patterns];
    const shuffledPatterns = duplicatedPatterns.sort(() => Math.random() - 0.5);
    
    setCards(
      shuffledPatterns.map((pattern, index) => ({
        id: index,
        pattern,
        isFlipped: false,
        isMatched: false
      }))
    );
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setGameCompleted(false);
  };

  const handleCardClick = (id: number) => {
    const card = cards.find(c => c.id === id);
    
    if (!card || card.isMatched || card.isFlipped || flippedCards.length >= 2) {
      return;
    }

    const newCards = cards.map(c =>
      c.id === id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(m => m + 1);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find(c => c.id === firstId);
      const secondCard = newCards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.pattern === secondCard.pattern) {
        setCards(cards.map(c =>
          c.id === firstId || c.id === secondId
            ? { ...c, isMatched: true }
            : c
        ));
        setMatches(m => m + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(cards.map(c =>
            c.id === firstId || c.id === secondId
              ? { ...c, isFlipped: false }
              : c
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-amber-50 to-orange-50 z-50 overflow-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Exit Game
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Memory Mandala</h2>
          <div className="flex justify-center gap-8">
            <p className="text-gray-600">Matches: {matches}</p>
            <p className="text-gray-600">Moves: {moves}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-4 gap-4">
            {cards.map(card => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square rounded-lg text-4xl flex items-center justify-center transition-all duration-300 transform ${
                  card.isFlipped || card.isMatched
                    ? 'bg-amber-100 rotate-0'
                    : 'bg-amber-500 rotate-180'
                }`}
              >
                {card.isFlipped || card.isMatched ? (
                  card.pattern
                ) : (
                  <Puzzle className="w-8 h-8 text-white" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={initializeGame}
            className="mt-8 w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}