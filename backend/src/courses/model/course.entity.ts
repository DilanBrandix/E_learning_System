/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    PrimaryColumn
  } from 'typeorm';
  
  @Entity('CourseDetails')
  export class Courses {
    @PrimaryGeneratedColumn()
    id: number;
  
    @PrimaryColumn()
    courseId:string
  
    @Column()
    cardHeader: string;
  
    @Column()
    cardSubHeading: string;

    @Column()
    imgPath: string;

    @Column()
    filePath: string;
  
    @Column({ type: 'nvarchar',length: "MAX", nullable: true })
    courseDescription: string;

    @Column()
    numberofLessons: string;

    @Column()
    rating: number;
    
    @Column()
    ratingValue: number;

    @Column()
    courcePrice: string;
  
    @CreateDateColumn()
    created_at: Date;
  
  }
  