import React from 'react'
import { HeroBaner } from './herobanner/HeroBaner'
import { Trending } from './trending/Trending'
import { Popular } from './popular/Popular'
import { TopRated } from './topRated/TopRated'

export function Home() {
  return (
    <div>
        <HeroBaner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}