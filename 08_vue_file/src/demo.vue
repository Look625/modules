<template>
    <div>
        <button>按钮</button>
    </div>
</template>
<script>
export default {
    name:"demo",
    props:['a','b'],
    created(){
        console.log(this.a)
        console.log(this.b)
    }
}
</script>
<style scoped>

</style>


