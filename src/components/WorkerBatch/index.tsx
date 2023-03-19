import React, {useEffect} from "react";
import {kit} from "kit";

interface Props {}

const threads = window.navigator.hardwareConcurrency / 2

export function WorkerBatch(props: React.PropsWithChildren<Props>){
  useEffect(() => {
    console.log("Starting BatchWorker")
    const array = kit.Iterable.range(0, 60).map(() => 36).array()
    const start = window.performance.now()
    Promise.all(kit.Iterable.range(0, threads).map(index => new Promise(resolve => {
      const worker = new Worker(new URL("../../webworkers/fibonacci.ts", import.meta.url), {type: "module"})
      const result: number[] = []
      worker.addEventListener("message", (event: MessageEvent<number>) => {
        result.push(event.data)
        if (result.length == array.length / threads) resolve(result)
      })
      array.slice((array.length / threads) * index, (array.length / threads) * (index + 1)).forEach(value => {
        worker.postMessage(value)
      })
    }))).then(result => {
      result.flat()
      const end = window.performance.now()
      const time = (Math.round((end - start) * 100) / 100).toFixed(2)
      console.log(`BatchWorker finished in: ${time}ms`)
    })
  }, [])
  return (
    <></>
  )
}
