import { JsonValue } from "type-fest";

export type Card = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  image: JsonValue;
  title: string | null;
  category: string | null;
};
