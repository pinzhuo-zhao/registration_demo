<template>
<!-- showing the name of the user -->
    <h1>Welcome, {{Username}} </h1>

</template>

<script>
export default {
    data(){
        return {
           Username:''
        }
    },
    created:function() {
        this.getParams()
        console.log(this.Username)
    },
    methods:{
        getParams() {
            //Getting the name passed by Register.vue
            this.Username = this.$route.query.name
     
        },
    }
}
</script>