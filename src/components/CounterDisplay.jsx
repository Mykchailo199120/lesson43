import {useContext, useState} from "react";
import {CounterContext} from "../context/CounterContext.jsx";

export  default function CounterDisplay() {
    const { count } = useContext(CounterContext);
    return <h1>Поточне значення: {count}</h1>;
}