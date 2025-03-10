import React from 'react'

const HeroStats = ({ number, text }: { number: string, text: string }) => {
    return (


        <div className="text-center">
            <p className="font-semibold text-2xl">{number}</p>
            <p>{text}</p>
        </div>


    )
}

export default HeroStats
