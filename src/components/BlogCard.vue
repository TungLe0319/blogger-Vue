<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <div slot="header" class="d-flex justify-content-center ">
          <h3>
           Blog Title
          </h3>
        </div>
        <div  class="d-flex justify-content-center">
          <img src="//thiscatdoesnotexist.com" alt="" class="forcedImg">
        </div>
       
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient">Delete</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
   
  </vs-row>
</template>

<script>
export default {
  props: {

  },

  setup(props) {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
