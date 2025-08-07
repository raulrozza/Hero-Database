import IStorageProvider from '@/domain/providers/IStorageProvider';

export default class LocalStorageProvider implements IStorageProvider {
  public clear(): void {
    return localStorage.clear();
  }

  public delete(key: string): void {
    return localStorage.removeItem(key);
  }

  public get<T = unknown>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data) as T;
  }

  public store(key: string, data: unknown): void {
    const stringifiedData = JSON.stringify(data);

    return localStorage.setItem(key, stringifiedData);
  }
}
