import { Injectable } from '@nestjs/common';
import { Contact } from '../../domain/model/contact.model';
import { ContactRepository } from '../../domain/ports/contact.repository';

@Injectable()
export class ContactInMemory implements ContactRepository {
    private readonly contacts: Contact[] = []; //Coleção de contatos iniciada vazia

    create(contact: Contact): Contact{
        this.contacts.push(contact); //insere o contato na tabela e retorna pra quem chamou
        return contact;
    }

    findById(id: string): Contact {
        return this.contacts.find((el) => el.id === id); //filtro no banco virtual, se verdade retorna só o conteudo strict igual (mesmo tipo)
    }
    findAll(): Contact[]{
        return this.contacts; //retorna todos os dados
    }
}