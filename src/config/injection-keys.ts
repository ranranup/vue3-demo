import type { InjectionKey } from 'vue';
import { type IType } from '@/interface';

export const myButtonGroupKey: InjectionKey<{ type: IType }> = Symbol();
