import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePolicyDto {

    @ApiProperty({
        example: '12345678-9'
    })
    @IsString()
    @IsNotEmpty()
    rutTitular: string;

    @ApiProperty({
        example: '01-01-2025'
    })
    @IsString()
    @IsNotEmpty()
    fechaEmision: Date;

    @ApiProperty({
        example: 'isapre'
    })
    @IsString()
    @IsNotEmpty()
    planSalud: string;

    @ApiProperty({
        example: "345122356"
    })
    @IsString()
    @IsNotEmpty()
    prima: number;

    @ApiProperty({
        example: "emitida"
    })
    @IsString()
    @IsOptional()
    estado: string;

}
