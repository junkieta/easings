export function smoothStepInOut(t: number): number {
	return t * t * (t * -2 + 3);
}
