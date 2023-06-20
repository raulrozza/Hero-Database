export default interface IStorageProvider {
  clear(): void;
  delete(key: string): void;
  get<T = unknown>(key: string): T | null;
  store(key: string, data: unknown): void;
}
