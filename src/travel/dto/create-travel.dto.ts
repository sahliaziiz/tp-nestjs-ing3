import { IsInt, IsNotEmpty, IsString, Min, MinLength } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";
export class CreateTravelDto {
  @ApiProperty({ example: "to china" })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  nom: string;

  @ApiProperty({ example: 9000 })
  @IsInt()
  @Min(1000)
  price: number;

 
}
