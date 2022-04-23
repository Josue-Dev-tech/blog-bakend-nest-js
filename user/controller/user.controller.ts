/* eslint-disable prettier/prettier */
import { Observable } from 'rxjs';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { create } from 'domain';
import { UserService } from '../service/user.service';
import { User } from '../models/user.interface';

@Controller('users')
export class UserController {
    constructor(private userservice: UserService){  }

    @Post()
        create(@Body() user: User): Observable<User>{
            return this.userservice.createData(user)
        }
    
    @Get(':id')
    findOne(@Param()params): Observable<User>{
         return this.userservice.findOne(params.id);
    }

    @Get()
    findAll(): Observable<User[]>{
        return this.userservice.findAll();
    }

    @Delete(':id')
    update(@Param('id') id: string): Observable<User>{
        return this.userservice.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user:User): Observable<any>{
        return this.userservice.updateOne(Number(id), user);
    }



}
