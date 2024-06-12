import useBearStore from "../../store/useBearStore"

export default function DocExample1() {

const bears = useBearStore((state) => state.bears)
const increasePopulation = useBearStore((state) => state.increasePopulation)

  return <div>
    <h1>{bears} around here ...</h1>
    <button onClick={increasePopulation}>one up</button>
  </div>
}
