import { Caixa, CaixaSub } from "../Components/Style/App/App"
import C1 from "../Components/C1/Textos1"
import C2 from "../Components/C2/Textos2"
import C3 from "../Components/C3/Textos3"

const App = () => {
    return(
        <Caixa>
            <C1/>
            <CaixaSub>
                <C2/>
                <C3/>
            </CaixaSub>
        </Caixa>
    )
}
export default App