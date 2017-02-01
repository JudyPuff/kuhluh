import React from 'react'

import AddColorContainer from '../containers/AddColorContainer'

const ColorLoading = (
  <div>
    <h2>Loading duh kuhluh ...</h2>
    <div>
      <img src='/getting-color.gif' className='swatch' />
    </div>
  </div>
)

const Color = props => {
  const ColorLoaded = (
    <div>
      <h2 style={{color: props.color}}>{props.color}</h2>
      <div className='swatch' style={{backgroundColor: props.color}} />
    </div>
  )

  const specifier = props.color ? 'uhnuhthuh' : 'uh'
  const linkText = props.gettingNewColor ? '' : `Get ${specifier} kuhluh`

  return (
    <div className='color'>
      <p>
        <a href='#' onClick={() => {
          props.getNewColor()
        }}>{linkText}</a>
      </p>
      {props.gettingNewColor ? ColorLoading : ColorLoaded}
      <AddColorContainer />
    </div>
  )
}

export default Color
