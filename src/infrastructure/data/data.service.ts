export abstract class IDataRepository<T> {
    abstract getAll(): T[]
    abstract getById(id: any): T
}