import { B1 } from "./Constants";
import { B2 } from "./Constants";
import { B3 } from "./Constants";
import { B4 } from "./Constants";
import { B5 } from "./Constants";
import { B6 } from "./Constants";


export function bounceInOut(t: number): number {
	if (t < .5) {
		t = 1 - t * 2;
		if (t < B1)
			return (1 - 7.5625 * t * t) / 2;
		if (t < B2)
			return (1 - (7.5625 * (t - B3) * (t - B3) + .75)) / 2;
		if (t < B4)
			return (1 - (7.5625 * (t - B5) * (t - B5) + .9375)) / 2;
		return (1 - (7.5625 * (t - B6) * (t - B6) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if (t < B1)
		return (7.5625 * t * t) / 2 + .5;
	if (t < B2)
		return (7.5625 * (t - B3) * (t - B3) + .75) / 2 + .5;
	if (t < B4)
		return (7.5625 * (t - B5) * (t - B5) + .9375) / 2 + .5;
	return (7.5625 * (t - B6) * (t - B6) + .984375) / 2 + .5;
}
