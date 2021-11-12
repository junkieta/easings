
export function cubeInOut(t: number): number {
	return t <= .5 ? t * t * t * 4 : 1 + (--t) * t * t * 4;
}
