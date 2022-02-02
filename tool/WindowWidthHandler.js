import { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isWindowSizeChanged, setIsWindowSizeChanged] = useState(false)

  // set window width
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [isWindowSizeChanged])

  // handle browser window resize
  useEffect(() => {
    const updateWindowDimensions = () =>
      setIsWindowSizeChanged((state) => !state)
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return windowWidth
}
