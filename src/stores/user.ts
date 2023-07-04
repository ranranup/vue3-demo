import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { AUTH_KEY } from './store-keys';
interface IuserInfo {
  userName: string;
  authorities: string[];
  orgId: string;
}
export const useUserStore = defineStore(AUTH_KEY, () => {
  const userInfo: IuserInfo = reactive({ userName: '', authorities: [], orgId: '' });
  const authorities = computed(() => userInfo.authorities);
  function getUserInfo() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        Object.assign(userInfo, {
          userName: 'ranran',
          authorities: ['DATA', 'FLOW'],
          orgId: '1'
        });
        resolve();
      }, 500);
    });
  }

  return { userInfo, authorities, getUserInfo };
});
