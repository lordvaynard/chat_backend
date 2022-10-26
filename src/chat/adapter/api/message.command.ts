import { ApiProperty } from "@nestjs/swagger";

export class MessageDto{ //complementar anotações do Swagger
    content: string;
    contactOrigin: string;
    contactDestination: string;
}

export class FindByUserCommand {
    @ApiProperty()
    userLoginId: string;
    @ApiProperty()
    userContactId: string;
}