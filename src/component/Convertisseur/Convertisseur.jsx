import {useState} from "react";
import "./convertisseur.scss";

export const Convertisseur = () =>{

    const [entry, setEntry] = useState(1);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [unit, setUnit] = useState(0);

    const [result, setResult] = useState("");

    const converters = [
        {
            id: 0,
            name: "unité",
            base: 1,
        },
        {
            id: 1,
            name: "deci",
            base: 0.1,
        },
        {
            id: 2,
            name: "centi",
            base: 0.01,
        },
        {
            id: 3,
            name: "mili",
            base: 0.001,
        },
    ];
    const units = [
        {
            id: 0,
            title: "metre",
        },
        {
            id: 1,
            title: "litre"
        }
    ];



    function calcule() {
        let res = (converters[to].base / converters[from].base) * entry;
        setResult(res.toString());
    }

    return (
        <div className="convertisseur">
            <div>
                <input type="number" value={entry} onChange={e => setEntry(parseInt(e.target.value))} />
                <select onChange={e => setFrom(parseInt(e.target.value))}>
                    {converters.map(converter => <option key={converter.id} value={converter.id}>{converter.name}</option>)}
                </select>
                <select onChange={e => setUnit(parseInt(e.target.value))}>
                    {units.map(unit => <option key={unit.id} value={unit.id}>{unit.title}</option>)}
                </select>

            </div>
            <div>
                <h1> = </h1>
            </div>
            <div>
                <span>{result.toString() + " " + (converters[to].id !== 0 ? converters[to].name: "") + units[unit].title + (result > 1 ? "s" : "")}</span>
                <select onChange={e => setTo(parseInt(e.target.value))}>
                    {converters.map(converter => <option key={converter.id} value={converter.id}>{converter.name}</option>)}
                </select>
            </div>
            <button onClick={e => calcule()}>Calculer</button>
            <button onClick={
                ()=> {
                    setEntry(0);
                    setFrom(0);
                    setTo(0);
                    setResult("");
                    setUnit(0);
                }
            }>Reset</button>
        </div>
    )
}