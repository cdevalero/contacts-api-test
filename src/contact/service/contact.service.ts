import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ContactEntity } from '../model/contact.entity';
import { Contact } from '../model/contact.interface';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(ContactEntity)
        private readonly contactRepository: Repository<ContactEntity>
    ){}

    create(contact: Contact): Observable<Contact>{
        return from(this.contactRepository.save(contact));
    }

    getAll(): Observable<Contact[]>{
        return from(this.contactRepository.find())
    }

    get(id: number): Observable<Contact>{
        return from(this.contactRepository.findOne(id))
    }

    update(id: number, contact: Contact): Observable<UpdateResult>{
        return from(this.contactRepository.update(id, contact))
    }
    
    delete(id: number): Observable<DeleteResult>{
        return from(this.contactRepository.delete(id))
    }
}
