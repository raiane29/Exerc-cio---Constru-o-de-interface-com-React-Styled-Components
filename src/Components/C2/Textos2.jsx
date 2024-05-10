import {Span, Caixa, Button, Texto1, Para, ValorP, Valor } from "../Style/C2/Textos2.js"

const C2 = () => {
    return(
     <Caixa>
        <Texto1>Monthly Subscription</Texto1>
        <Span>
        <Valor>$29</Valor>
        <ValorP>per month</ValorP>
        </Span>
        <Para>Full access for less than $1 a day</Para>
        <Button>Sign Up</Button>
     </Caixa>
    )
}
export default C2