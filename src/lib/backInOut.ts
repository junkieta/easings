
export function backInOut(t: number): number {
	t *= 2;
	if (t < 1)
		return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - (--t) * (t) * (-2.70158 * t - 1.70158)) / 2 + .5;
}
