import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { Contact } from '../../domain/model/contact.model';
import { ContactService } from '../../domain/ports/contact.service';
import { FindByUserDto } from './contact.command';


@Controller({
    path: 'contacts',
    version: ['1'],
})

export class ContactController {
    private readonly logger = new Logger(ContactController.name);

    constructor(private contactService: ContactService) {}

    @Post()
    create(@Body() contactCmd: Contact): Contact { //normalmente utiliza um objeto de comando e não o model
        const { name } = contactCmd; //extrai somente o name e descarta o resto
        const contact = this.contactService.create(name); //chamando o método create do service
        this.logger.debug('contact create');
        this.logger.debug(JSON.stringify(contact));//transformando o objeto JSON em String
        return contact;
    }

    @Get()
    findAll(): Contact[] { //retorna o array de contatos
        return this.contactService.findAll(); //retorna o findall
    }

    @Get(':userLoginId') //sintex de parametro (variavel)
    findByUser(@Param() params: FindByUserDto): Contact[] { //retorna uma lista de contatos
        return this.contactService.findByUser(params.userLoginId  )
    }
}