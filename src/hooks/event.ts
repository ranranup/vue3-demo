import { onMounted, onBeforeUnmount } from 'vue';

export function useEventListener(target: EventTarget, event: string, callback: Function) {
  onMounted(() => target.addEventListener(event, callback as EventListenerOrEventListenerObject));
  onBeforeUnmount(() =>
    target.removeEventListener(event, callback as EventListenerOrEventListenerObject)
  );
}
