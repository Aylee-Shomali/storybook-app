import { Note } from './note';

export interface Character {
    id: number;
    name: string;
    photo: string | null;
    age: number | null;
    eyeColor: string | null;
    species: string | null;
    notes: Array<Note> | null;
    pinterestBoardURL: string | null;
  }