import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Box } from './Box'
import { Dustbin } from './Dustbin'

export default function CopyOrMove() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Dustbin allowedDropEffect="any" />
                    <Dustbin allowedDropEffect="copy" />
                    <Dustbin allowedDropEffect="move" />
                </div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Box name="Glass" />
                    <Box name="Banana" />
                    <Box name="Paper" />
                </div>
            </div>
        </DndProvider>
    )
}