<template>
    <div class="wrapper">
        <t-map/>
        <like/>
    </div>
</template>

<script>
import TMap from '@/components/products/map.vue'
import Like from '@/components/products/like.vue'
export default {
    components:{
        TMap,
        Like
    }
}
</script>

<style lang="scss">
</style>