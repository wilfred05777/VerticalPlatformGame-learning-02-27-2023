// @ts-nocheck

// https://www.youtube.com/watch?v=rTVoyWu8r6g

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// console.log(c)
canvas.width = 1024
canvas.height = 576

// c.fillStyle = 'white'
// c.fillRect(0, 0, canvas.width, canvas.height)

// c.fillStyle = 'red'
// c.fillRect(200, 100, 100, 100)

let y = 100

function animate() {
  window.requestAnimationFrame(animate)

  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.fillStyle = 'red'
  c.fillRect(200, y, 100, 100)
  y++
}

animate()
