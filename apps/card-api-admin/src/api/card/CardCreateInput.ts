import { InputJsonValue } from "../../types";

export type CardCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
  category?: string | null;
};
