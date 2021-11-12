export function quartOut(t: number): number {
	return 1 - (t -= 1) * t * t * t;
}
