import type { Axios } from 'axios';
import { ref, type Ref } from 'vue';
import { inject } from 'vue';

export function useFetch(url: string): {
  data: Ref<null>;
  success: Ref<null>;
  msg: Ref<null>;
} {
  const axios: Axios = inject('axios') as Axios;
  const data = ref(null);
  const success = ref(null);
  const msg = ref(null);
  const fetchData = async () => {
    const { data: resData } = await axios.post(url, {});
    data.value = resData.workFrom;
    success.value = resData.success;
    msg.value = resData.msg;
  };

  fetchData();

  return { data, success, msg };
}
