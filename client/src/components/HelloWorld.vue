<template>
  <v-container>
    <v-col  cols="12" sm="3">
      <v-hover v-slot="{ isHovering, props }" open-delay="100">
        <v-card text="" width="300" v-bind="props" :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" class="rounded-lg">
          <v-img src="../assets/nobik.webp" >
            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark"  density="compact">
              <v-spacer></v-spacer>
              <v-btn icon="mdi-information">
                <v-icon icon="mdi-information"></v-icon>
                <v-dialog
                  v-model="dialog"
                  activator="parent"
                  width="auto"
                >
                  <v-card width="600px">
                    <v-img src="../assets/nobik.webp" height=""></v-img >
                    
                    <v-card-text>
                      "Сокровища нубика" - захватывающая аркадная игра, в которой вы будете вести героя по имени Нубик на его приключениях в облачном царстве. Вашей задачей будет помочь Нубику собирать драгоценные алмазы, которые падают с неба. Однако будьте осторожны, так как иногда среди блестящих камней могут упасть опасные динамиты!
                    </v-card-text>
                    <v-card-actions>
                      <v-btn @click="dialog = false" class="w-25 bg-red-accent-4" href="/games/nobik">Играть</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn  @click="dialog = false">Закрыть</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
            </v-toolbar>
              <a href="/games/nobik">
                <v-card-text :hidden="isHovering ? false : true" class="text-center pt-16 mt-6">
                  <p class="GameText">
                    Сокровища нубика
                  </p>
                </v-card-text>
              </a>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-container>

</template>

<script lang="ts">
    export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&display=swap');
  a, u {
    text-decoration: none;
  }
  main {
    background: rgb(229,57,53);
    background: radial-gradient(circle, rgb(229, 57, 53) 0%, rgba(136,14,79,1) 100%);
  }
  .GameText {
    font-family: 'Oswald';
    font-size: 24px;
    height: 60%;
    align-items: flex-end;
    color:white;
  }
</style>