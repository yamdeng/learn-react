import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TutorialApp } from './TutorialApp'

export default function Tutorial() {
    return (
        <DndProvider backend={HTML5Backend}>
            <TutorialApp/>
        </DndProvider>
    )
}