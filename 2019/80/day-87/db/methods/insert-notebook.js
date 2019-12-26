import { notebook } from '../mock';

const insertNotebook = db => {
  return db('notebook').insert(notebook);
}

export default insertNotebook;
