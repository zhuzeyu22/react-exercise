type SomeConstructor = {
  new (s: string): Object;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
