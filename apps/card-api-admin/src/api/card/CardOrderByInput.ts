import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  title?: SortOrder;
  category?: SortOrder;
};
