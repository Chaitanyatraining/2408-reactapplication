import ClassComp from "./ClassComp"
import ConditionalRenderingComp from "./Components/ConditionalRenderingComp"
import CounterApp from "./Components/CounterApp"
import FormValidation from "./Components/FormValidation"
import Header from "./Components/Header"
import ListAndKeys from "./Components/ListAndKeys"
import Routing from "./Components/Routing/Routing"
import StylingComp from "./Components/stylings/StylingComp"
import FuncComp from "./FuncComp"

const App = () => {
  const arr = [1,2,3]
  return(
    <div>
      <Header />
      <Routing />
      {/* <h2 className="bg-info">Welcome to React</h2> */}
      {/* <FuncComp course="ReactJs" arr={arr} duration="3 Months" />
      <ClassComp course="ReactJs" /> */}
      {/* <StylingComp /> */}
      {/* <ListAndKeys /> */}
      {/* <ConditionalRenderingComp /> */}
      {/* <FormValidation /> */}
      {/* <CounterApp /> */}
    </div>
  )
}

export default App