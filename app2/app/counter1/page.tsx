"use client";
import {useState} from "react";
import styles from "./mystyles.module.css";

export default function Home() {
  let [var1, setVar1] = useState(0);

  return <>
    <button className={styles.button} onClick={() => {setVar1(var1+1)}}>Increase</button>
    <p className={styles.p}>{var1}</p>
  </>;
}
