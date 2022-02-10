export enum ECanvasType {
    fl = 0, // floor
    wa = 1, // wall
    dr = 2, // door
    tr = 3, // trap
    md = 4, // mini demon
    de = 5, // demon
    ch = 6, // chest
    he = 7, // hero
    drw = 8, // door win
}

export enum EGameObjectType {
    ti = 0, // tile
    en = 1, // enemy 
    he = 2 // hero,

}

export enum EGameStatus {
    won = 1,
    lost = 2,
    playing = 3
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