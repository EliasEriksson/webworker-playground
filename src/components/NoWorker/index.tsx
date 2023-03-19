import styles from "./style.module.scss"
import React, {useEffect, useState} from "react";
import {kit} from "kit";
import {fibonacci} from "../../utils/fibbonacci";

interface Props {}

interface State {}

export function NoWorker(props: React.PropsWithChildren<Props>){
  useEffect(() => {
    console.log("Starting NoWorker")
    const start = window.performance.now()
    kit.Iterable.range(0, 60).map(() => fibonacci(36)).array()
    const end = window.performance.now()
    const time = (Math.round((end - start) * 100) / 100).toFixed(2)
    console.log(`No worker finished in ${time}ms`)
  })
  return (
    <></>
  )
}
