import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="title" source="title" />
        <TextInput label="category" source="category" />
      </SimpleForm>
    </Edit>
  );
};
