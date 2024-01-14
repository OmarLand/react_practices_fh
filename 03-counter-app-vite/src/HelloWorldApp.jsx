import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";

export function App() {

    return (<>
        {/* <div>Omar Landaeta Full stack Web Developer</div> */}
        {/* <FirstApp title = 'Soy Omar Landaeta'/> */}
        <CounterApp value = { 100 } />
    </>)

}