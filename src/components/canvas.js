import React, { useRef, useEffect } from 'react'
import {UserConsumer} from '../contexts/userContext';
import './canvas.scss'

const Canvas = (props) => {

  const canvas = useRef()

  useEffect(() => {
    const dpr = window.devicePixelRatio
    canvas.current.width = window.innerWidth * dpr
    canvas.current.height = window.innerHeight * dpr
    const ctx = canvas.current.getContext('2d')

    ctx.scale(dpr, dpr)

    renderScene()
  })

  const clear = ctx => {
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
    ctx.restore()
  }

  const renderScene = () => {
    const ctx = canvas.current.getContext('2d')
    clear(ctx)
    setTimeout(
      () =>
        props.render(
          ctx,
          canvas.current.width,
          canvas.current.height
        ),
      0
    )
  }

  return (
    <UserConsumer>
      {props => 
          <div className={props.frame ? 'frame' : ''}>
            <canvas ref={canvas} className="main-canvas" />
          </div>
    }
    </UserConsumer>
  )
}

export default Canvas