export type Player = 'X' | 'O';
export type BoardState = (Player | null)[];
export type Winner = Player | 'Draw' | null;

export interface GameHistory {
    winner: string;
    playerX: string;
    playerO: string;
    date: string;
  }