export default interface IHTTPProvider {
    get<T = unknown>(path: string): Promise<T>;
}
