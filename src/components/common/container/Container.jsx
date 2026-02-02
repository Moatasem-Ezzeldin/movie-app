import React from 'react'

const Container = ( { children } ) => {
  return (
    <div className='container relative mx-auto flex flex-col min-h-screen bg-container overflow-hidden'>
        { children }
    </div>
  )
}

export default Container