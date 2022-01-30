

export interface IPosition {
    x:number;
    y:number;
    v?:VDirection;
    h?:HDirection
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
