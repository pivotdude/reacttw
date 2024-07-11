import { User } from 'src/modules/user/user.entity';
import { Repository } from 'typeorm';

export abstract class BaseRepository<T extends Repository<any>, G> {
  public model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(): Promise<any[]> {
    return this.model.find();
  }

  async findById(id: number): Promise<User | null> {
    return this.model.findOneBy({ id });
  }

  async findByLogin(login: string): Promise<User | null> {
    return this.model.findOne({ where: { login } });
  }

  async create(data: G): Promise<G> {
    return this.model.save(data);
  }

  async update(id: number, data: any): Promise<any> {
    await this.model.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.model.delete(id);
  }
}
