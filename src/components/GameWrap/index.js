import { useEffect, useState, useRef } from 'react'

const GameWrap = ({ scrollBack, children }) => {
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Ref
  const slider = useRef() //dom
  const isMouseDown = useRef(false) //flag

  useEffect(() => {
    if (!scrollBack) return
    slider.current.scrollTo(0, 0)
  }, [children, scrollBack])

  const stopDraggingEffect = () => (isMouseDown.current = false)

  const startDraggingEffect = (e) => {
    isMouseDown.current = true
    setStartX(e.pageX - slider.current.offsetLeft)
    setScrollLeft(slider.current.scrollLeft)
  }

  const calcMoveDistance = (e) => {
    // 避免拖曳反白等
    e.preventDefault()

    // guard
    if (!isMouseDown.current) return

    const x = e.pageX - slider.current.offsetLeft
    const scroll = x - startX
    slider.current.scrollLeft = scrollLeft - scroll
  }

  return (
    <div
      className="game-wrap"
      ref={slider}
      onMouseMove={calcMoveDistance}
      onMouseDown={startDraggingEffect}
      onMouseUp={stopDraggingEffect}
      onMouseLeave={stopDraggingEffect}
    >
      {children}
    </div>
  )
}

export default GameWrap
