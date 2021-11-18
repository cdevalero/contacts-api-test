import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.interface';
import { ContactService } from '../service/contact.service';

@Controller('contact')
export class ContactController {
    
    constructor(private contactService: ContactService){}

    @Post()
    create(@Body() contact: Contact): Observable<Contact>{
        return this.contactService.create(contact)
    }

    @Get()
    getAll(): Observable<Contact[]>{
        return this.contactService.getAll()
    }

    @Get(':id')
    get(@Param() id: number): Observable<Contact>{
        return this.contactService.get(id)
    }

    @Put(':id')
    update(@Param() id: number, @Body() contact: Contact){
        return this.contactService.update(id, contact)
    }
    
    @Delete(':id')
    delete(@Param() id: number){
        return this.contactService.delete(id)
    }
}
