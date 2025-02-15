/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardWhereUniqueInput } from "./CardWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CardUpdateInput } from "./CardUpdateInput";

@ArgsType()
class UpdateCardArgs {
  @ApiProperty({
    required: true,
    type: () => CardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CardWhereUniqueInput)
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CardUpdateInput,
  })
  @ValidateNested()
  @Type(() => CardUpdateInput)
  @Field(() => CardUpdateInput, { nullable: false })
  data!: CardUpdateInput;
}

export { UpdateCardArgs as UpdateCardArgs };
