// TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
// https://www.typescriptlang.org/
// npm install tslint typescript -g
// tsc --init
// tslint --init
// npm run build
// npm start
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as users from './users';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send({ message: 'TypeScript' });
});

// GET ALL
app.get('/users', (req: express.Request, res: express.Response) => {
  res.status(200).send(users.usersList);
});
// GET ID
app.get('/users/:userId', (req: express.Request, res: express.Response) => {
  const userId: number = parseInt(req.params.userId);
  res.status(200).send(users.usersList.find((user) => user.id === userId));
});
// CREATE ID
app.post('/users', (req: express.Request, res: express.Response) => {
  const newUser: users.User = req.body;

  users.usersList.push( users.createNewUserFromData(newUser) );
  res.status(200).send(users.usersList);
})

app.listen(PORT);
console.log(`http://localhost:${PORT}`);
