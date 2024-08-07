import { FindManyOptions, Repository } from 'typeorm';

export abstract class BaseRepository<T extends Repository<any>, G> {
  public model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(params?: FindManyOptions<G>): Promise<G[]> {
    return this.model.find(params);
  }

  async findById(id: number, relations?: string[]): Promise<G | null> {
    return this.model.findOne({ where: { id }, relations });
  }

  async create(data: Partial<G>, relations?: any): Promise<G> {
    const result = await this.model.save(data);
    return this.findById(result.id, relations);
  }

  async update(id: number, data: Partial<G>): Promise<G | null> {
    await this.model.update(id, data);
    return this.findById(id);
  }

  async save(data: Partial<G>): Promise<G> {
    return this.model.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.model.delete(id);
  }

  getPagination(pagination: { offset: number; limit: number }) {
    const { offset, limit } = pagination;

    return {
      take: limit,
      skip: offset,
    };
  }
}
