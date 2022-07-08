//DTO is data transfer object => the object type what we send and recieve
// Use DTO for validate quary what server get
// Using DTO we can validate user's input type

import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;
}
