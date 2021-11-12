import { PI2 } from "./constants";
export function sineIn(t: number): number {
	return -Math.cos(PI2 * t) + 1;
}
