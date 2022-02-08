import { ECanvasType, EGameObjectType, HDirection, VDirection } from "enums";


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
    tileValue:ECanvasType,
    gameObjectType: EGameObjectType
}

export interface IGameObjectStatus {
    validMoviment: boolean
    dead: boolean,
    chest: boolean, 
    door: boolean, 
}

export interface IGameObject {
    initialPosition:IPosition
}
export interface IEnemyProps extends IGameObject{
    
}
export interface IHeroProps extends IGameObject{

}
