import db from '../db/index';
import { compose, prop, head } from 'ramda';

const getUserIdFromName = async name => {
  const getId = compose(prop('id'), head);
  const result = await db.where('name', name).select('id').from('users');
  return getId(result);
}

export const resolveUser = async (rootValue, { name } ) => {
  const id = await getUserIdFromName(name);
  return [{
    id,
    name,
    notebook: await db.where('userId', id).select('note', 'createdAt').from('notebook')
  }];
}

export const resolveUsers = async rootValue => {
  return await db.select('name').from('users');
}

export const resolveCreateNote = async (rootValue, { name, note }) => {
  const newNotebook = {
    userId: await getUserIdFromName(name),
    note,
    createdAt: new Date()
  };
  await db('notebook').insert(newNotebook);
  return newNotebook;
}

export const resolveCreateUser = async (rootValue, { name }) => {
  const newUser = { name }
  await db('users').insert(newUser);
  return newUser;
}
