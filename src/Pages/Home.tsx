import React, { useState } from 'react'
import {Redirect} from "react-router-dom"

import {Button} from '@material-ui/core'

const Home = () => {

    const [move, setMove] = useState(<a></a>);

    let src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUXGR0UFRoVFhsVFxvY/VAWGBzi/1MAABbB4kkAABgAABPc/1Hf/1IAABkAABKqx0INDBk9RiPS9k6xz0QKBxl0hzG21Ubo/1XH6Uufuj82PiHL7kxHUiYSEhq/30iSqzuFmzeZsz1oei9+kzVZZysvNiBLVyaMozlTYCkmKx6uy0MzOyEgJB1mdy5tgDAdIB5ebi2yogf8AAAL9ElEQVR4nO3diVajOhgAYAmlkU2p1mpt6zLujnrn/Z/uEpYskJCEBAo55pxxLKVtPv7kTwhtPTn5Lb/lt/yW3/JbJAUcuwJDl8B5IXBdCFwX+q4LAXBcGDgvBK4LgetC4LoQuC4MXBcSoKtC4LoQuC70XRcC4LgwcF4IXBcC14W+68IW0DVh0AI6JuQAHRNygG4JeUCnhO0s45iQ63NJyMsybgkFQHeEIqAzQn6WcUgoBjoiFGUZZ4RdQDeEXUAnhJ1AF4QdWcYNYbfPAWFnlnFBKAXOXigFzl0oyTLzFyoA5y2Ud8KZC5WAsxYqAf1j19KgKAGBd+xq9i8qWSYHzleoCpytUC3LeDMWKgPnKlQCzlmo3AnnKtQBzlKonmVmKtQDzlGoB5yhUAk4Z6FWlpmjUBs4N6FmlpmhUB84M6EScM5C/U44M2Ev4JyEPbLMvIQ9gTMS9gTOR6gEnLOwX5aZkbA/cCbCvllmPkID4DyESsA5Cw064TyEZsAZCE2yzCyEpsDpC02BkxcqAecsNMwy0xeaR3DiQuMsMxVhICg2IjgJYQBaHg3g6MJAaSeFSPl0kulIODKgbWFeY1tC4Hs+qadfiltUKdCysKiyFSC37rnZZ5ly4DGEDFDY/sRV1gPaFeoDlSLot6tdxpFzx7BCfaBQKICxsVTxWRUGKkI1IC9qap4hhUrA/lmmd3EeaFmoBRSnUcUeZlV4CHFJyw0pteUQpBCVkCnFjgG9X0UrnwyWD0EiyC9ZUcOM2UZqvq6ewI7w8HFzWpWbB1Tz9L/NKd5y+ZI+4ftJOc9FAF6SDZ+hj8ohJI893ULghe3HorJ7RcT11x3ZdPNWEvMgr/fFS36+w26gojB9TBZVWX4c8nr/i+Pqdrx8TLN0Ud8kZfmTC+E9fuAiPoUAAeGGbEveQhA+JK0HF7tHef3CrwvqqZNz7Ik2cfnyTxKiWgjX+FXibRhk8HGJX3O3D0HKq+MOApA+L6ktdzAHejRwkbyvPcjz5UfoOW+A4Qu78Q5WnXS9r595eZuZC9N7LEy+DunXDYnoPVznIb1oVzC5SsHh0KhePhWJzumjsQwP4RU3hItdHsLwlt0W7+qAVSFE2+67g6gCBFQIz0P4jVtosluFQZ5MqDomdbnIOdEd03hRDKMt47mBHu/woCf6E3rwttX4o3LoJyHMq2QupBrh8gVuSQt9g+v87oCqY/xzVZXXtQ/fGE28gQDeL5lNWxg+XaMDQnc2VJZ5COErjhN+/UoTXZKDbh5DkJIanR9wC01ublM0AAbpn4S82llZYJqB9J3RLOJPCB/YTclVmL0/P+9XH58E8Xq72j//W2XwFb/UeX3v8qXodNmKPI+FfkjnkT+kIg8wKyYmPtyRKl+UZbENm50QCc+eWOBiucpAFq6z9IU0uk2UZeswzOB7/bLx+RPuF69rVGt4TvUb41wKQlKjG9xsbm7DajVl/dyodnlcAckF1RGIt//KPWNySPJuhQpV4+W+MHjwHwbuznCEk280wmd/qRD+7Q6hgjDl5brTszyAoJh6wdPWvflxBRBHPnko6xe/lf8nj7UQ9UxUDl90CEvgN9508V90V/+eFKOfTgjlwiCk8gg5cu/ram7JDeF+neJkF2++mUOUfK5wdO5LIdySEJZzFPhDnvVvGOGgF2mFCaGkFyoIqRAmj+TQ5eM56oN5L9yQjcuqbOCBZKfkhGkEyeUZfprkX1qGkOxQTGQY4OoMnpFjvIVsCC8jCVAuJHkk3pB8UEy30NlBRg1Ml2d4fkw6YfIU0cLkMopwo1gGhyKE5MgVExkvojLSLp+W3lEiyIZwtTYVUkPB8jmiulzykaHTH0jSfPJ9u6oKxFXMZ5fhDzUhuIzIYI0aAgohmVAsblBIood2w69LPm2jQ7iRhlAqpIaCU0hxqyxBH088n7l+usVb8wEsJI/KgR7EU0CUkPKjBKk5YT6R8aI3MXBxETEh3EtDKBOmJEsk3yk9e1ksv1MmzVMlwucDyQP0Qpz3EdAnaSN5QmeHB0ieAs1FIzKtj+tCnjqONEMoE1JDwQ4GAXMScQE9Ks2TklyROqBWh4UFMCPxTfZr1M7JcyY/oRdRs8LNeVk2VBI/vOiFUCKkhoLkT366d0jp+eMjpNI8JSeJsEgEtRABAQjfSJuEHvDpk6eL6HBGZubxpspc0TvVkT+2eiGUCMNdPQAsLyAa/9LtNd6yvN5/Ubdw+SQ7FJPi8LvcqwDmczx89ynqyeEbfo7rKxhekmfcwUNZx/CHbLymf1cJoayVhniBJCzXkVJmIeUgWGFhl1XKx0SwXI+HUV2q4R7fjvI0Q92qgTkxovahflcBaq61sYuB5Q+AVwV9H6VG9KO8gIL+x4Vd8aV+U6mlSdETYiOlBeU/UF3oJFsBoGy+6BogrolP/Tym8KS+RkgooBLi/zjrvRxeGWHrIBvCE0bIBo5EEjSv4frNMl1htbbNI9JaqgQtXY0cHthD2OyH3cIAVOFrx1ANaBzl/kIJkY4gTzdSBHsIMVBKDEgU+cJRgD1HC+aGpJUGOG8eBagrZIAyYcB0xOO00X5zmubt7m4oEI4F7CNskzti6GMgOA5QT9gMYYew8OFQijshehNQ8XMawpNqPqNG7GylwONNUplp0JGEbbEYSJQtn1KZhrBl5coB/llMXC28t/kYwhLW8FYy5qQjoKdx3DRb/WtVttcgalnIaAPB/LWB4RWF88njCOk0hNtsB5AxMtpW3vGrn9pRtCtkgHXe7QSKYsnojII4nPAEh1QO5LVShuj3Jw4JxL/TWacRON5QyWmj9O/TELLzAl4IBf2P3wnZm1MQNt/Cp9dGAU4r3HyjGcRhgCKhBpCKXjPtTEHIMTeHenHxGnFrEY8v5L3NVBZBqlvSYeOts+oBhxBy30dbCGXRK6mtFuozWk3gAELBG4WFcxnA/teOmeFlDvtAkVASuSaweSmnuuYzBaFgu6T3lQO97/En3CS5agNH++yaaALDvwTX47NCYwlFQHyprbutcuNmkGXsCzuACsIGyG9J+wAtf7JLdAeohew5YLO5itqmCdDyJ7s6gIBmcdcuRC0Ub5yAULDdp4CC+ImW3wzOCwcQdkZQ2g1bpqa5J9DmaqJou5KwFblGt+y/Jj44sP5eBA0gFUPfZJywK+zOMjJh3RAFfdBohX9ooK8j5J3yGrZRe0IZUHQp32+Ng7wWawC0JJRkGVrIGfMBO39pE02AdoQKwNb8hR9D7nK+EdCKUJZGO1qpLxjq6f5oePHUBlCWRjtiqHIp0QxoQShPo50xpILFiaI50IZQsL1ZY1EyFQfPt3KtezBg89P2Gp3Q+JTQqlAVyBfKfDaudA8EbH9LVyvFUH3Q5rLMWMJ2nTlAH/tEV5uOL9QFitsod6XUBtBMqNwJuUQOib0MYwVoJNQBtheieDsxQbUDNBGqZ5lmDEETaPt8wpJQC9haierwlWcY0xWKRvHukdDyCcWQQlH/UglhPUD2ucQ0mlD85VbV1SVxBOlVGntA60IRkP+WLt5vloG2hXpAHm7iQvEgRw8UuDnW13WbYJtAu8Kucz1uG228jcR49XdoYdd3qlLvTOAP8LYna0MIO780ltcJ+Sf4loE2hV1AKoLDXAcdQ9hd7yrLSD+EYNtnUSgJTccJBXPFcLpC6clQUQRvlxkyhNauzEiAgESwK5EOALQllAFBJxDvNF2hFNg65+WVIXyWhAoXH9j3A/EfMF2hAhA0vnCcd/40DNDKtScFYPsTBk3fYB+5HAnICxt751BAC0JFoKQMBjQXqhI61p6GbKPmQpUswy7BcE/xhwOaCvsAhz6ptypU/UMwonsGOam3KlQESk6ZBgWaCZWA3BD67A5TFSp2wlooesPFsEAToTJQsO47Ric0Eqr/uSnpDtMUavw9raMC+wu1gMJTp+GBvYVKQGkIRwD2FSpnGZRnxDtPV6gRwa75zBjAfkKtv9on3WGCQi1gazDEl2bGAfYSKgG5IaS5IwH7CLWA4m44XaFGGvWYPwM35nTbRKgXQWEIRwPqf9eXHrC+FNMM/HhAbaEukMcb8evo9IVKwKawVUbLMqj8D4WF+QkYyYFiAAAAAElFTkSuQmCC"

    return (
        <div>
           <Button onClick = {() => {setMove(<Redirect to = "/exercise"/>)}}>
               <img src = {src} alt="Kemtai Logo"/>
           </Button>
           {move}
        </div>
)}

export default (Home)