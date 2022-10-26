import {v4 as uuidv4 } from 'uuid';
import { Contact } from './contact.model';

export class Message {
    id: string;
    content: string;
    origin: Contact;
    destination: Contact;
    createdAt: Date;
    updatedAt: Date;

    constructor(content: string, origin: Contact, destination: Contact){
        this.id = uuidv4();
        this.content = content;
        this.origin = origin;
        this.destination = destination;
    }
}