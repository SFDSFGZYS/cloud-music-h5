<template>
    <div class="side_popup">
        <main class="main">
            <div class="basic_info">
                <div class="avator">
                    <img src="../assets/images/640.gif" alt>
                </div>
                <div class="info">
                    <div class="name_info">
                        <span class="name">我是你支哥</span>
                        <span class="iconfont icon-VIP"></span>
                        <span class="level">Lv.8</span>
                    </div>
                    <div class="sign">
                        <span class="iconfont icon-dataBase"></span>签到
                    </div>
                </div>
            </div>
            <span class="iconfont icon-xinfeng"></span>
        </main>
        <footer class="footer"></footer>
    </div>
</template>

<script>
export default {}
</script>

<style  lang="less" scoped>
.side_popup {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        .basic_info {
            width: 100%;
            height: 1.7rem;
            background-color: #e0e0de;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0.18rem;
            .avator {
                width: 0.6rem;
                height: 0.6rem;
                margin-bottom: 0.1rem;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .info {
                display: flex;
                justify-content: space-between;
                .name_info {
                    .name {
                        margin-right: 0.05rem;
                    }
                    .icon-VIP {
                        background-color: #cacaca;
                        margin-right: 0.05rem;
                        display: inline-block;
                        padding: 0.02rem 0.04rem;
                        color: #fff;
                        border-radius: 0.04rem;
                    }
                    .level {
                        background-color: #d9d9d7;
                        font-style: italic;
                        font-weight: bold;
                        color: #999;
                        display: inline-block;
                        padding: 0.02rem 0.09rem 0.02rem 0.05rem;
                        border-radius: 0.07rem;
                    }
                }
                .sign {
                    width: 0.6rem;
                    height: 0.24rem;
                    background-color: #fe3a3b;
                    color: #fff;
                    border-radius: 0.12rem;
                    text-align: center;
                    line-height: 0.24rem;
                    .icon-dataBase {
                        margin-right: 0.08rem;
                    }
                }
            }
        }
    }
    .footer {
        height: 0.48rem;
        border-top: 1px solid #fafafa;
    }
}
</style>
