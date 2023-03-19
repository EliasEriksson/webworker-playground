import styles from "./style.module.scss"
import React, {useEffect, useState} from "react";
import {kit} from "kit";

interface Props {}


export function WorkerSwarm(props: React.PropsWithChildren<Props>){
  useEffect(() => {
    console.log("Starting WorkerSwarm")
    const start = window.performance.now()
    Promise.all(kit.Iterable.range(0, 60).map(() => new Promise<number>(resolve => {
      const worker = new Worker(new URL("../../webworkers/fibonacci.ts", import.meta.url), {type: "module"})
      worker.addEventListener("message", (event: MessageEvent<number>) => resolve(event.data))
      worker.postMessage(36)
    }))).then(() => {
      const end = window.performance.now()
      const time = (Math.round((end - start) * 100) / 100).toFixed(2)
      console.log(`Finished in: ${time}ms`)
    })
  }, [])
  return (
    <></>
  )
}
