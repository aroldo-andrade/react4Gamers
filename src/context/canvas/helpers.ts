import { EDirection, HDirection, IPosition, VDirection } from "interfaces"




export const handlerNextPosition = (direction:EDirection, position:IPosition) => {

  const moveFuncitions: { [index: string]: (pst:IPosition) => IPosition } = {
        ArrowLeft: (pst:IPosition) => ({ x: pst.x - 1, y: pst.y, h:HDirection.LEFT, v:VDirection.DEFAULT }),
        ArrowRight: (pst:IPosition) => ({ x: pst.x + 1, y: pst.y, h:HDirection.RIGHT, v:VDirection.DEFAULT }),
        ArrowDown: (pst:IPosition) => ({ x: pst.x, y: pst.y - 1, v:VDirection.DOWN }),
        ArrowUp: (pst:IPosition) => ({ x: pst.x, y: pst.y + 1, v:VDirection.UP })
    }
    let moveFunction =  moveFuncitions[direction]
    if(moveFunction)
        return moveFunction(position)
    return position
}

