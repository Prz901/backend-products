import { IsString, IsNumber, IsNotEmpty } from '@nestjs/class-validator'


export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsNumber()
  @IsNotEmpty()
  quantity: number

}
