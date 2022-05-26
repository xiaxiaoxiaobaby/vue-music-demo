<!--
 * @Author: 夏天 542483954@qq.com
 * @Date: 2022-05-24 13:50:27
 * @LastEditors: 夏天 542483954@qq.com
 * @LastEditTime: 2022-05-26 14:37:10
 * @FilePath: /mydemo/vue-music/src/components/base/scroll/scroll.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div  ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
  import useScroll from './use-scroll'
  import { ref } from 'vue'

  export default {
    name: 'scroll',
    setup(props, { emit }) {
      const rootRef = ref(null)
      console.log(rootRef)
      const scroll = useScroll(rootRef, props, emit)

      return {
        rootRef,
        scroll
      }
    }
  }
</script>
