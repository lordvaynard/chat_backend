import { Contact } from '../model/contact.model';

export interface ContactRepository{
    create (contact: Contact): Contact;
    findAll(): Contact[];
    findById(id: string): Contact;
}

export const ContactRepository = Symbol('ContactRepository');
