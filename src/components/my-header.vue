<template>
    <div class="my_header">
        <i @click="$router.go(-1)" class="iconfont icon-arrow-left" :class="{white}"></i>
        <div class="middle_header">
            <slot name="middle-header"></slot>
        </div>
        <span :style="{width:rightWidth + 'px'}" class="right_header">
            <slot name="right-header"></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        rightWidth: {
            type: Number,
            default: 50
        },
        white: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
.my_header {
    height: 0.5rem;
    width: 100%;
    line-height: 0.5rem;
    display: flex;
    i {
        width: 0.5rem;
        text-align: center;
        font-size: 0.24rem;
        font-weight: bold;
        &.white {
            color: #fff;
        }
    }
    .middle_header {
        flex: 1;
    }
    .right_header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
