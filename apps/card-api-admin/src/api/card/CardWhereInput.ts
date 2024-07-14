import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CardWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
  category?: StringNullableFilter;
};
