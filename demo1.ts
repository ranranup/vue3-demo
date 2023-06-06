function test({ a, b }: { a: number; b: number }): number {
  return a + b;
}
type Man = { name: string; age: number };
interface IMan {
  name: string;
  age: number;
  [propname: string]: any;
}
class CMan {
  name: string;
  age: number;
}
let m1:Man = {name: 'zs', age: 20}
let m2: IMan = {name: 'ls', age:21, address: 'a'}
let m3: CMan = {name: 'ww', age: 22}
let b = {name: '1', age: 2}
type S = [string, string, number]
let s: S = ['1', '2', 3]

type Name = string;
let ss: Name = '';

