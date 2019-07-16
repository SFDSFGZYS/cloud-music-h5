<template>
    <div class="index">
        <van-popup v-model="popupVisible" position="left" class="user_info">
            <side-popup></side-popup>
        </van-popup>
        <div class="main_body">
            <div class="header">
                <div class="left">
                    <van-icon class="icon_nav" name="wap-nav" @click="popupVisible=true" />
                </div>
                <div class="tab_bar">
                    <van-tabbar
                        v-model="active"
                        active-color="#333"
                        nactive-color="#999"
                        :fixed="false"
                    >
                        <van-tabbar-item>标签</van-tabbar-item>
                        <van-tabbar-item>标签</van-tabbar-item>
                        <van-tabbar-item>标签</van-tabbar-item>
                        <van-tabbar-item>标签</van-tabbar-item>
                    </van-tabbar>
                </div>
                <div class="search">
                    <van-icon class="icon_search" name="search" @click="routerTo('/search')" />
                </div>
            </div>
            <van-swipe :autoplay="0" indicator-color="white" class="swiper_main" :loop="false">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import sidePopup from './sidePopup'
export default {
    components: { sidePopup },
    data() {
        return {
            popupVisible: false,
            active: 0
        }
    },
    created() {
        this.$axios.get('search?keywords=海阔天空').then(res => {
            console.log(res)
        })
    },
    methods: {
        routerTo(val) {
            this.$router.push(val)
        }
    }
}
</script>

<style lang="less" scoped>
.user_info {
    width: 85%;
    height: 100%;
}
.main_body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
        width: 100%;
        height: 0.6rem;
        display: flex;
        line-height: 0.6rem;
        padding: 0 0.16rem;
        .left,
        .search {
            font-size: 0.2rem;
            width: 0.6rem;
        }
        .search {
            text-align: right;
        }
        .tab_bar {
            flex: 1;
            .van-tabbar {
                height: 100%;
                .van-tabbar-item {
                    font-size: 0.12rem;
                    font-family: 'PingFangSC-Semibold', sans-serif;
                    line-height: 0.6rem;
                    .van-tabbar-item__text {
                        font-weight: bold;
                    }
                    &.van-tabbar-item--active {
                        font-size: 0.16rem;
                    }
                }
            }
        }
    }
    .swiper_main {
        width: 100%;
        flex: 1;
    }
}
</style>
