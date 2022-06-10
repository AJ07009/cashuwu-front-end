import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Basket {
  readonly id: string;
  readonly Unit?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly phone_number?: number | null;
  readonly Basket?: Basket | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBasketId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}