// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Basket, User } = initSchema(schema);

export {
  Basket,
  User
};