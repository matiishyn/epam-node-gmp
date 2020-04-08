import express, { Request, Response } from 'express';
import User from '../models/user';
import { usersBodyValidator } from '../validators/users.validator';
import UserController from '../controllers/user';

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

usersRouter
  // GET users/
  .get('/', async (req: Request, res: Response) => {
    try {
      const { search, limit } = req.query;
      const users: User[] = search
        ? await UserController.getAutoSuggestUsers(search, limit)
        : await UserController.getAll();
      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  // GET users/:id
  .get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
      const user: User = await UserController.getOne(id);
      res.status(200).send(user);
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  // POST users/
  .post('/', usersBodyValidator, async (req: Request, res: Response<User>) => {
    try {
      const user: User = req.body;
      await UserController.create(user);
      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  })
  .put('/:id', usersBodyValidator, async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const user: User = req.body;
      await UserController.update(id, user);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  })
  .delete('/:id', async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      await UserController.remove(id);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
