declare module "*.md";

declare interface AnyObject<T = any> {
  [key: string]: T;
}
