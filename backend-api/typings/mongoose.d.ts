import m from 'mongoose';

declare module 'mongoose' {
  /*
   * section model.js
   * http://mongoosejs.com/docs/api.html#model-js
   */
  export const Model: UModel<any, any>;
  interface UModel<Req extends m.Document, Res extends m.Document> {
    create<TCreate = Req>(
      doc: m.CreateQuery<TCreate>,
      options?: m.SaveOptions
    ): Promise<Res>;

    create<TCreate = Req>(
      doc: m.CreateQuery<TCreate>,
      callback?: (err: any, res: Req[]) => void
    ): Promise<Res>;

    create<TCreate = Req>(
      docs: m.CreateQuery<TCreate>[],
      callback?: (err: any, res: Req[]) => void
    ): Promise<Res[]>;

    create<TCreate = Req>(
      docs: m.CreateQuery<TCreate>[],
      options?: m.SaveOptions,
      callback?: (err: any, res: Req[]) => void
    ): Promise<Res[]>;

    create<TCreate = Req>(...docs: m.CreateQuery<TCreate>[]): Promise<Res>;
  }

  /**
   * Defines a model or retrieves it.
   * Models defined on the mongoose instance are available to all connection
   *   created by the same mongoose instance.
   * @param name model name
   * @param collection (optional, induced from model name)
   * @param skipInit whether to skip initialization (defaults to false)
   */
  export function model<Req extends m.Document, Res extends m.Document>(
    name: string,
    schema?: m.Schema,
    collection?: string,
    skipInit?: boolean
  ): UModel<Req, Res>;
}
