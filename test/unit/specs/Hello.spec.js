import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    console.log(vm);
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 1234];
  });
});
