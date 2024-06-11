import { Repository } from 'typeorm';

export abstract class BaseRepository<T extends Repository<any>> {
  public model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(): Promise<any[]> {
    return this.model.find();
  }

  async findById(id: number): Promise<any | null> {
    return this.model.findOneBy({ id });
  }

  async create(data: any): Promise<any> {
    return this.model.save(data);
  }

  async update(id: number, data: any): Promise<any> {
    await this.model.update(id, data);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.model.delete(id);
  }
}