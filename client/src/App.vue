<template>
  <v-app id="inspire">
    <!---------------------------- navigation Start ------------------------------------->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><v-img src="./../public/Blog Watch.png" class="fix-logo"></v-img></v-list-item-title>
          <v-list-item-subtitle>MEVN Stack</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <!-- gạch xuống hàng -->
      <v-divider inset></v-divider>

      <v-list rounded>
        <v-list-item-group  color="teal">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <!---------------------------- navigation End --------------------------------------->
    <v-app-bar app rounded outlined color="teal lighten-4">
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><h3>Application</h3></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>


    <v-footer dark padless class="mt-15">
      <v-card class="flex" flat tile >
        <v-card-title class="teal lighten-4">
          <strong class="subheading">Get connected with us on social networks!</strong>
    
          <v-spacer></v-spacer>
    
          <v-btn v-for="icon in iconFooter" :key="icon" class="mx-4" dark icon @click="icon.url">
            <v-icon size="24px">
              {{ icon.sticker }}
            </v-icon>
          </v-btn>
        </v-card-title>
    
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Blog Watch</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({ 
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-home', link: '/'},
      { title: 'Add Post', icon: 'mdi-notebook', link: '/add-post'},
    ],
    iconFooter: [
      { sticker: 'mdi-facebook', url: 'https://www.facebook.com/profile.php?id=100010948332178' },
      { sticker: 'mdi-instagram', url: 'https://www.instagram.com/ta_danglam/' },
      { sticker: 'mdi-twitter', url: 'https://twitter.com/lam573008391' },
    ],
  }),
  
}
</script>

<style scoped>
.fix-logo{
    height: 70px
}

</style>
