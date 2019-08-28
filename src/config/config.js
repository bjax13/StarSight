import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading
})

const config = {
  firebase_config: {
    apiKey: "AIzaSyBFbCYD5GFoSRMQnbALpG0FrhGLsgNDJww",
    authDomain: "starsightlive.firebaseapp.com",
    databaseURL: "https://starsightlive.firebaseio.com",
    projectId: "starsightlive",
    storageBucket: "",
    messagingSenderId: "534699431997",
    appId: "1:534699431997:web:461d4b5cb1503a46"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyAHDWj-zMh0Nejbz1I2X2HrkLGmU-6xuSA",
    authDomain: "starsightdev.firebaseapp.com",
    databaseURL: "https://starsightdev.firebaseio.com",
    projectId: "starsightdev",
    storageBucket: "",
    messagingSenderId: "301663324805",
    appId: "1:301663324805:web:4dedb46d9cf3d077"
  },
  firebase_providers: ['google.com', 'facebook.com', 'twitter.com', 'github.com', 'password', 'phone'],
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync
}

export default config
