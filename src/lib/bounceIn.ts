import { B1, B2, B3, B4, B5, B6 } from "./constants";
export function bounceIn(t: number): number {
	t = 1 - t;
	if (t < B1)
		return 1 - 7.5625 * t * t;
	if (t < B2)
		return 1 - (7.5625 * (t - B3) * (t - B3) + .75);
	if (t < B4)
		return 1 - (7.5625 * (t - B5) * (t - B5) + .9375);
	return 1 - (7.5625 * (t - B6) * (t - B6) + .984375);
}
