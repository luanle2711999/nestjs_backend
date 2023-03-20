import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class CreatePostDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  url: string;
}
export default CreatePostDto;
