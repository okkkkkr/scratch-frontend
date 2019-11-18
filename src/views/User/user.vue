<template>
  <div class="wrapper">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../../components/stage/NavBar'
import Main from '../../components/stage/Main'
import Footer from '../../components/stage/Footer'
export default {
  components:{
      Nav,
      Main,
      Footer
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less">

</style>