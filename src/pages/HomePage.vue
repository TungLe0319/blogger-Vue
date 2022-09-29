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
</style>
