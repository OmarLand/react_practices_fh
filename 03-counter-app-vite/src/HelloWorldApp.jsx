import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { Nombre } from "./ComponentPruebas";

export function App() {

    return (<>
        <h2>Omar Landaeta Full stack Web Developer</h2>
        <FirstApp title = 'Soy Omar Landaeta' subtitle="Lo que fuere"/>
        <CounterApp value = { 1 } />

        <Nombre/>
    </>)

}