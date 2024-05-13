/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    PrimaryColumn
  } from 'typeorm';
  
  @Entity('Users')
  export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @PrimaryColumn()
    username:string
  
    @Column()
    password: string;
  
    @Column()
    fullName: string;

    @Column()
    userRole: string;
  
    @Column()
    accessType: string;
  
    @CreateDateColumn()
    created_at: Date;
  
  }
  