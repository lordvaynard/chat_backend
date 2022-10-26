import { ApiProperty } from "@nestjs/swagger";

export class FindByUserDto { //somente para o Swagger
    @ApiProperty()
    userLoginId: string;
}