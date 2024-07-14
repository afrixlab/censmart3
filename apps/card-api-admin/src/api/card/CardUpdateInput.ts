import { InputJsonValue } from "../../types";

export type CardUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
  category?: string | null;
};
