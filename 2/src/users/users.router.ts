import express, { Request, Response } from 'express';
import { User } from './users.interface';
import UserService from './users.service';

export const usersRouter = express.Router();

/*
REST API description
====================
GET 	  /users                : Get all users
GET     /users?search&limit   : getAutoSuggestUsers
POST 	  /users                : Create a new user

GET 	  /users/{id} : Get the user information identified by "id"
PUT 	  /users/{id} : Update the user information identified by "id"
DELETE	/users/{id} : Delete user by "id"
 */

// GET users/
usersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { search, limit } = req.query;
    const users: User[] = search
      ? await UserService.getAutoSuggestUsers(search, limit)
      : await UserService.findAll();
    res.status(200).send(users);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET users/:id
usersRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const user: User = await UserService.findOne(id);
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// POST users/
usersRouter.post('/', async (req: Request, res: Response<User>) => {
  try {
    const user: User = req.body;
    await UserService.create(user);
    res.sendStatus(201);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// PUT users/
usersRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user: User = req.body;
    await UserService.update(id, user);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE users/:id
usersRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await UserService.remove(id);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
