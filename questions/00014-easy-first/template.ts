export type First<T extends any[]> =
    T extends [] ? never :
      T extends any[]
        ? T[0] : never
