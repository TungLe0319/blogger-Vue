<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="con-example-images">
          
          <vs-images>
            <vs-image
              :key="index"
              :src="`https://picsum.photos/400/400?image=2${index}`"
              v-for="(image, index) in 9"
            />
            <vs-image
              :key="index"
              :src="`https://picsum.photos/400/400?image=1${index}`"
              v-for="(image, index) in 7"
            />
          </vs-images>
        </div>
      </div>
      <div class="col-md-6 mt-5">
 <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
           Blog Title
          </h3>
        </div>
        <div slot="media" class="d-flex justify-content-center">
          <img src="//thiscatdoesnotexist.com" alt="" class="forcedImg">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
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
      </div>
      <div class="col-md-12">
        
      </div>
    </div>
  </div>
</template>

<script>
  
export default {};
</script>

<style scoped lang="scss">
.con-example-images {
  max-height: 500px overflow auto;
}

.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
   //top/right/bottom/left  for margin;
  margin:2px 2px 2px 2px;
  border-radius: 4px;
}


</style>
