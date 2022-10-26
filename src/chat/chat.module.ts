import { Module } from '@nestjs/common';
import { ContactController } from './adapter/api/contact.controller';
import { ContactRepository } from './domain/ports/contact.repository';
import { ContactInMemory } from './adapter/db/contactInMoemory.repository';
import { ContactService } from './domain/ports/contact.service';
import { MessageRepository } from './domain/ports/message.repository';
import { MessageInMemory } from './adapter/db/messageInMemory.repository';
import { MessageController } from './adapter/api/message.controller';
import { MessageService } from './domain/ports/message.service';
import { SocketService } from './domain/ports/socket.service';


@Module({
    controllers: [ContactController, MessageController],

    providers:[
        SocketService,
        ContactService,
        {
            provide: ContactRepository,
            useClass: ContactInMemory, // process.env.DATA_BASE === 'MEMORY' ? ContactInMemory : ContactPostgre - chavear o codigo
        },
        MessageService,
        {
            provide: MessageRepository,
            useClass: MessageInMemory, // process.env.DATA_BASE === 'MEMORY' ? ContactInMemory : ContactPostgre - chavear o codigo
        },      
    ],
})
export class ChatModule {}
