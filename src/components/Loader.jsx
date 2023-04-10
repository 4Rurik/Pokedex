import React from 'react'
import { Jelly } from '@uiball/loaders'

export const Loader = () => {
  return (
    <div className="container-loader">
        <Jelly size={350} speed={0.35} color="goldenrod" />
    </div>
  )
}
