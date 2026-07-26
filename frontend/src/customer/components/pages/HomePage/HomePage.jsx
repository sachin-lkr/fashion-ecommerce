import React from 'react'
import HomeCarosel from '../../HomeCarosel/HomeCarosel'
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'

function HomePage() {
  return (
    <div>
        <HomeCarosel/>
        <div>
            <HomeSectionCarosel/>
            other Section
        </div>
    </div>
  )
}

export default HomePage