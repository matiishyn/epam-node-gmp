import * as Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

const msgs = {
  pswd: 'Field "password" must contain letters and numbers',
  age: 'User’s age must be between 4 and 130',
};

const querySchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/(?=.*?[0-9])(?=.*?[a-zA-Z]).{2,}/)
    .message(msgs.pswd)
    .required(),
  age: Joi.number()
    .min(4)
    .message(msgs.age)
    .max(130)
    .message(msgs.age)
    .required(),
  isDeleted: Joi.boolean().required(),
});

export const usersBodyValidator = validator.body(querySchema);
