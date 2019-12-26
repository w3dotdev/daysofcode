import { prop, values, flatten, mapObjIndexed, map, compose, curry } from 'ramda';

const mock = [{
  name: 'Hemerson',
  notebook: [
    {createdAt: new Date(), note: 'nota 1-1'},
    {createdAt: new Date(), note: 'nota 1-2'},
    {createdAt: new Date(), note: 'nota 1-3'},
    {createdAt: new Date(), note: 'nota 1-4'}
  ]}, {
  name: 'Nerd',
  notebook: [
    {createdAt: new Date(), note: 'nota 2-1'},
    {createdAt: new Date(), note: 'nota 2-2'},
    {createdAt: new Date(), note: 'nota 2-3'},
    {createdAt: new Date(), note: 'nota 2-4'}
  ]
}];

const addUserId = (index, data) => {
  data['userId'] = index;
  return data;
}

const addUserIdToNotebook = (value, index) => {
  const addUserIdWithIndex = curry(addUserId)(++index);
  return compose(map(addUserIdWithIndex), prop('notebook'))(value);
}

const addUserIdToAllNotebook = mapObjIndexed(addUserIdToNotebook);
const mapUserName = curry(map(data =>  {
  return { name: data.name };
}));

export const notebook = compose(flatten, values, addUserIdToAllNotebook)(mock);
export const users = mapUserName(mock);
