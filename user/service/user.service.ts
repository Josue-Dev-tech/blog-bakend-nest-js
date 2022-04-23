/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../models/user.entity';
import { from, Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userrespository: Repository<UserEntity>
    ){}

    createData(user: User): Observable<User> {
        return from(this.userrespository.save(user));
    }
    findAll(): Observable<User[]>{
        return from(this.userrespository.find())
    }

    findOne(id:number): Observable<User>{
        return from(this.userrespository.findOne({id}));
    }

    deleteOne(id: number): Observable<any>{
        return from(this.userrespository.delete(id))
    }

    updateOne(id:number, user: User): Observable<any>{
        return from(this.userrespository.update(id, user));
    }





}
