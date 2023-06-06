import type { InjectionKey } from 'vue';
interface IType {
  type: 'primary' | 'text' | 'danger';
}
export const myButtonGroupKey = Symbol() as InjectionKey<IType>;
