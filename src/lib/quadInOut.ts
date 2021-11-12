export function quadInOut(t: number): number {
	return t <= .5 ? t * t * 2 : 1 - (--t) * t * 2;
}
