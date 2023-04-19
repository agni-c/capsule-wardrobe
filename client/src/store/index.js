// https://github.com/pmndrs/valtio
import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: 'black',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png', // decal -> sticker
  fullDecal: './threejs.png'
})

export default state
