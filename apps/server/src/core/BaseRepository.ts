import { FindManyOptions, Repository } from 'typeorm';

export abstract class BaseRepository<T extends Repository<any>, G> {
  public model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(params?: FindManyOptions<T>): Promise<G[]> {
    return this.model.find(params);
  }

  async findById(id: number, relations?): Promise<G | null> {
    return this.model.findOne({ where: { id }, relations });
  }

  async findByLogin(login: string, relations?: any): Promise<G | null> {
    return this.model.findOne({
      where: { login },
      relations,
    });
  }

  async create(data: G, relations?: any): Promise<G> {
    const result = await this.model.save(data);
    return this.findById(result.id, relations);
  }

  async update(id: number, data: any): Promise<any> {
    await this.model.update(id, data);
    return this.findById(id);
  }

  async save(id: number, data: any): Promise<any> {
    await this.model.save({ id, data });
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.model.delete(id);
  }
}
