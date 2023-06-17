import IStorageProvider from '@/shared/domain/providers/IStorageProvider';

export default class LocalStorageProvider implements IStorageProvider {
  public async clear(): Promise<void> {
    return localStorage.clear();
  }

  public async delete(key: string): Promise<void> {
    return localStorage.removeItem(key);
  }

  public async get<T = unknown>(key: string): Promise<T | null> {
    const data = localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data) as T;
  }

  public async store(key: string, data: unknown): Promise<void> {
    const stringifiedData = JSON.stringify(data);

    return localStorage.setItem(key, stringifiedData);
  }
}
