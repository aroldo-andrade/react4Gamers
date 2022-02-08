import { HDirection, VDirection } from "enums";
import { IPosition } from "interfaces";

export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * TILE_SIZE;
export const DOUBLE_TILE_SIZE = TILE_SIZE * 2;
export const HEAD_TOP_OFFSET = 21;
export const HEAD_HEIGHT_OFFSET = 21;
export const TILE_SIZE_OFFSET = 12;
export const DOUBLE_TILE_SIZE_OFFSET = 6;
export const HERO_Z_INDEX = 2;
export const ENEMY_Z_INDEX = 1;
export const HERO_INITIAL_POSITION:IPosition = {x: 1,y: 18, v:VDirection.DEFAULT, h:HDirection.RIGHT}
export const DEFAULT_INITIAL_POSITION:IPosition = {x: 0,y: 0, v:VDirection.DEFAULT, h:HDirection.RIGHT}
export const DEFAULT_GAME_OBJECT_STATUS = {
    validMoviment:false,
    dead:false,
    chest:false, 
    door:false, 
}

