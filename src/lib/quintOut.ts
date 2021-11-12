export function quintOut(t: number): number {
	return (t = t - 1) * t * t * t * t + 1;
}
