import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Help from '@/components/Help'
import NewAlbum from '@/components/Album/NewAlbum'

import ManageAlbums from '@/components/Album/ManageAlbums'
import EditAlbum from '@/components/Album/EditAlbum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    {
      path: '/help',
      name: 'helpPage',
      component: Help
    },
    {
      path: '/new',
      name: 'newAlbumPage',
      component: NewAlbum
    },
    {
      path: '/albums/',
      name: 'manageAlbumsPage',
      component: ManageAlbums,
      children: [
        {
          path: 'edit/:id',
          name: 'editAlbumPage',
          component: EditAlbum
        }
      ]
    }
  ]
})
