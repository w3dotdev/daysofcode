import { promisify } from 'bluebird';

const populateWithUsers = db => {
  const users = ['Hemerson', 'Nerd']
  const rows = users.map((user) => {
    return { name: user };
  });

  return db('users').insert(rows);
}

export default populateWithUsers;
