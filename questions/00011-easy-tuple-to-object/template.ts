export type TupleToObject<T extends readonly PropertyKey[]> = {
  [I in T[number]]: I
}
