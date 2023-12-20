export interface B {
  b: string;
}
export interface C {
  c: string;
}

export interface A<B, C> {
  a: B;
  d: C;
}

export interface IPractice {
  // 可选
  any?: any;
  // 函数
  func1: () => void;
  func2(): void;
  // 可调用 函数声明函数签名
  (): Object;
  // 构造
  new (): Object;
  // 属性析构
  [key: string]: number | Function | string;
  // 只读属性
  readonly hello: string;
  get some(): number;
  set some(v: number | string);
}

// const a: IPractice = () => {};

class ImplPractice implements IPractice {
  [key: string]: string | number | Function;
  any?: any;
  func1: () => void;
  func2(): void {
    throw new Error("Method not implemented.");
  }
  hello: string;
  get some(): number {
    throw new Error("Method not implemented.");
  }
  set some(v: number) {
    throw new Error("Method not implemented.");
  }
}
