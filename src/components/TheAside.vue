<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#334256" text-color="#ffffff"
    active-text-color="#20a0ff" router>
    <template v-for="item in items">
      <template>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon">
            {{item.title}}
          </i>
        </el-menu-item>
      </template>
    </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../assets/js/bus'
export default{
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-document',
          index: 'Info',
          title: 'Home Page'
        },
        {
          icon: 'el-icon-document',
          index: 'Consumer',
          title: 'User manage'
        },
        {
          icon: 'el-icon-document',
          index: 'Singer',
          title: 'Singers manage'
        },
        {
          icon: 'el-icon-document',
          index: 'SongList',
          title: 'Song list manage'
        }

      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    // bus完成组件联系, 折叠侧边
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  background-color: #334256;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar{
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse){
  width:180px;
}

.sidebar >ul {
  height: 100%;
}
</style>
