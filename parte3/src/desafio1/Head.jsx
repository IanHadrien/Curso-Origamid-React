import React from 'react'
import { useEffect } from 'react'

export const Head = (props) => {
  useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description);
  }, [props]);

  return <></>
}
