import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { Message } from "src/chat/domain/model/message.model";
import { MessageService } from "../../domain/ports/message.service";
import { FindByUserCommand, MessageDto } from "./message.command";

@Controller({
    path: 'messages',
    version: ['1'],
})

export class MessageController {
    private readonly logger = new Logger(MessageController.name);

    constructor(private messageServices: MessageService) {}

    @Post()
    create(@Body() messageCmd: MessageDto): Message{
        const message = this.messageServices.create(
            messageCmd.content,
            messageCmd.contactOrigin,
            messageCmd.contactDestination,
        )
        return message;
    }

    @Get()
    findAll(): Message[] {
        return this.messageServices.findAll();
    }

    @Get(':uerLoginId/:userContactId')
    findByUser(@Param() body: FindByUserCommand ): Message[] {
        return this.messageServices.findByUser(
            body.userLoginId, 
            body.userContactId
        );
    }
}