import React, {} from "react";
import {WorkerSwarm} from "../WorkerSwarm";
import {NoWorker} from "../NoWorker";
import {WorkerSingle} from "../WorkerSingle";
import {WorkerBatch} from "../WorkerBatch";

interface Props {}

export function App(props: React.PropsWithChildren<Props>){
  return (
    <div>
      {/*<NoWorker />*/}
      {/*<WorkerSingle />*/}
      {/*<WorkerBatch />*/}
      {/*<WorkerSwarm />*/}
    </div>
  )
}
