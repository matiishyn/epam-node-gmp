import * as Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

const querySchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/(?=.*?[0-9])(?=.*?[a-zA-Z]).{2,}/)
    .message('Field "password" must contain letters and numbers')
    .required(),
  age: Joi.number()
    .min(4)
    .message('user’s age must be between 4 and 130')
    .max(130)
    .message('user’s age must be between 4 and 130')
    .required(),
  isDeleted: Joi.boolean().required(),
});

export const usersBodyValidator = validator.body(querySchema);
