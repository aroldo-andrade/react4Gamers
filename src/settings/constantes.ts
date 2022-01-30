import { HDirection, IPosition, VDirection } from "interfaces";

export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * TILE_SIZE;
export const DOUBLE_TILE_SIZE = TILE_SIZE * 2;
export const HEAD_OFFSET = 21;
export const TILE_SIZE_OFFSET = 12;
export const DOUBLE_TILE_SIZE_OFFSET = 6;
export const HERO_Z_INDEX = 2;
export const ENEMY_Z_INDEX = 1;
export const HERO_INITIAL_POSITION:IPosition = {x: 15,y: 15, v:VDirection.DEFAULT, h:HDirection.RIGHT}