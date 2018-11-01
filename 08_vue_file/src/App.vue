<template>
    <div class="div-root">
        <h4>{{msg1}}</h4>
        <demo v-bind="msg2"></demo>
       <h5>我是webpack生成的第一个vue章节</h5>
       <div>关于webpack依赖包分类管理和分类恢复</div>
       <ul>
           分类管理
           <li>1.开发依赖（打包相关的webpack包依赖）：npm i "package_name" -D  --> devDependencies</li>
           <li>2.生产依赖（不包含webpack打包依赖）： npm i "package_name" -S   --> dependencies</li>
       </ul>
       <ul>分类恢复
           <li>如果包文件操作不当，少了，删除了</li>
           <li>1.开发恢复：npm i</li>
           <li>2.生产恢复： npm i --production</li>
       </ul>
    </div>
</template>
<script>
import Demo from './demo.vue';
export default {
    components:{Demo},
    data(){
        return{
            msg1:"hello vue",
            msg2:{a:1,b:2},

        }
    }
}
</script>
<style>
.div-root{
    background: rgba(255, 0,0, 0.2);
    color: #000;
    padding-left: 12px;
    padding-top: 5px;
    padding-bottom: 18px;
}
</style>


