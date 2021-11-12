
export function backOut(t: number): number {
	return 1 - (--t) * (t) * (-2.70158 * t - 1.70158);
}
