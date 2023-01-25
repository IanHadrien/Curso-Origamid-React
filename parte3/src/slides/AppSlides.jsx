import React from 'react'
import { Slide } from './Slide'

export const AppSlides = () => {
  const slides = [
    {
      id: 'slides1',
      text: 'Slides 1',
    },
    {
      id: 'slides2',
      text: 'Slides 2',
    },
    {
      id: 'slides3',
      text: 'Slides 3',
    },
  ]

  return (
    <div>
      <Slide slides={slides}/>
    </div>
  )
}
