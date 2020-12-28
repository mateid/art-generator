import React, { useContext, useState } from 'react'

const ImageDataContext = React.createContext()
const SetImageDataContext = React.createContext()

const ImageContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState('')

  return (
    <ImageDataContext.Provider value={imageData}>
      <SetImageDataContext.Provider value={setImageData}>
        {children}
      </SetImageDataContext.Provider>
    </ImageDataContext.Provider>
  )
}

const useImageData = () => {
  const context = useContext(ImageDataContext)
  return context
}

const useSetImageData = () => {
  const context = useContext(SetImageDataContext)
  return context
}

export { ImageContextProvider, useImageData, useSetImageData }
