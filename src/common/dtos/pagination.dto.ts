import { Type } from "class-transformer";
import { IsOptional, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class PaginationDto {
    @ApiPropertyOptional({
        description: 'Número máximo de registros a devolver',
        example: 10,
    })
    @IsOptional()
    @Type(() => Number)
    limit?: number;

    @ApiPropertyOptional({
        description: 'Número de registros a omitir desde el inicio',
        example: 0,
    })
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}