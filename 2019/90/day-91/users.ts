export interface User {
  "id"?: number;
  "name": string;
  "email": string;
}

export const usersList: User[] = [{
  email: "email@email.com",
  id: 0,
  name: "Name 1",
}, {
  email: "email@email.com",
  id: 1,
  name: "Name 2",
}];

const findHighestId = (): number => {
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
  const numbers: number[] = usersList.map((user) => user.id!);
  return Math.max(...numbers);
};

export const createNewUserFromData = (data: User): User => {
  return {
    id: findHighestId() + 1,
    ...data,
  };
};
