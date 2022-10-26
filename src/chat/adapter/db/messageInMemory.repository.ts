import { Injectable } from '@nestjs/common';
import { Message } from '../../domain/model/message.model';
import { MessageRepository } from '../../domain/ports/message.repository';


@Injectable()
export class MessageInMemory implements MessageRepository {
    private readonly messages: Message[]  = [];

    create(message: Message): Message {
        this.messages.push(message);//grava a mensagem
        return message;
    }
    findAll(): Message[] {
        return this.messages; //retorna todas mensagens
    }
    findByUser(userLoginId: string, userContactId: string): Message[] {
        return this.messages.filter( //verifica se foi enviada uma mensagem ou se foi recebida uma mensagem
            (el) => 
            (el.origin.id === userLoginId && el.destination.id === userContactId) ||
            (el.origin.id === userContactId && el.destination.id === userLoginId),
        );
    }
}
