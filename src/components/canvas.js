import './canvas.scss'
import React, { useRef, useLayoutEffect } from 'react'
import { UserConsumer } from '../contexts/userContext';
import { useSetImageData } from '../contexts/imageContext'

const defaultScene = { render: () => { } }

const Canvas = ({ scene = defaultScene, showFrame = false, setImageData }) => {

  const canvas = useRef()
  const container = useRef()
  const setData = useSetImageData()

  useLayoutEffect(() => {
    const dpr = window.devicePixelRatio

    canvas.current.width = container.current.offsetWidth * dpr
    canvas.current.height = container.current.offsetHeight * dpr

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
      {
        scene.render(ctx, canvas.current.width, canvas.current.height)
        setData(canvas.current.toDataURL('image/png'))
      },
      0
    )
  }

  return (
    <UserConsumer>
      {props =>
        <div ref={container} className={showFrame ? 'frame' : 'no-frame'}>
          <canvas ref={canvas} className="main-canvas" />
        </div>
      }
    </UserConsumer>
  )
}

export default Canvas