<template>
    <div>
        <el-table :data="musicList" style="width:40%;margin:0 auto" border fit>
            <el-table-column type="index" label width="50"></el-table-column>
            <el-table-column prop="name" label="歌名"></el-table-column>
            <el-table-column prop="id" label="id"></el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            style="text-align:center;margin-top:10px"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            musicList: [],
            total: 30,
            currentPage: 1,
            pageSize: 10
        }
    },
    created() {
        this.getData(this.currentPage, this.pageSize)
    },
    methods: {
        getData(currPage, pageSize) {
            console.log('curr:' + currPage + ';pageSize:' + pageSize)
            this.$axios
                .get('https://autumnfish.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA', {
                    currPage,
                    pageSize
                })
                .then(res => {
                    console.log(res)
                    this.musicList = res.data.result.songs
                })
        },
        handleCurrentChange(val) {
            console.log(val)
            this.currentPage = val
            this.getData(this.currentPage, this.pageSize)
        },
        handleSizeChange(val) {
            console.log(val)
            this.pageSize = val
            this.getData(this.currentPage, this.pageSize)
        }
    }
}
</script>

<style>
</style>
