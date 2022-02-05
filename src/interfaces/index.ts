import { ECanvasType } from "enums";


export interface IPosition {
    x:number;
    y:number;
    v?:VDirection;
    h?:HDirection
}

export interface TileProps extends IPosition{
    value:ECanvasType,
    coord:IPosition
}

export interface ICanvasMap {
    position:IPosition,
    coord:IPosition,
    tileValue:ECanvasType
}

export enum HDirection {
    RIGHT = 1,
    LEFT = -1,
}

export enum VDirection {
    UP = -20,
    DOWN = 20,
    DEFAULT = 0
}

export enum EDirection{
    ArrowLeft = 'ArrowLeft',
    ArrowRight = 'ArrowRight',
    ArrowDown = 'ArrowDown',
    ArrowUp = 'ArrowUp'
}


export interface IGameObject {
    initialPosition:IPosition
}
export interface IEnemyProps extends IGameObject{
    
}

export interface IHeroProps extends IGameObject{

}
