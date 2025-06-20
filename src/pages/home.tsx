import React from "react"

import Component1 from "~/components/Component1"
import Component2 from "~/components/Component2"
import Component3 from "~/components/Component3"
import Component4 from "~/components/Component4"
import Component5 from "~/components/Component5"
import Component6 from "~/components/Component6"
import Component7 from "~/components/Component7"

function Gap() {
    return (
        <div style={{height: 20}}>

        </div>
    )
}

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FFF2F2] flex flex-row">
            <Component1/>
            <Gap/>
            <Component2/>
            <Gap/>
            <Component3/>
            <Gap/>
            <Component4/>
            <Gap/>
            <Component5/>
            <Gap/>
            <Component6/>
            <Gap/>
            <Component7/>
        </div>
    )
}