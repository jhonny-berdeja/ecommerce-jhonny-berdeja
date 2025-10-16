import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'files' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  mineType: string;

  @Column({ type: 'bytea' })
  data: Buffer;

  //@ManyToOne(() => ProductEntity, (product) => product.files)
  //@JoinColumn()
  //product: ProductEntity;
}
