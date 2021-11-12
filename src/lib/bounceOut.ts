import { B1 } from "./Constants";
import { B2 } from "./Constants";
import { B3 } from "./Constants";
import { B4 } from "./Constants";
import { B5 } from "./Constants";
import { B6 } from "./Constants";
export function bounceOut(t: number): number {
	if (t < B1)
		return 7.5625 * t * t;
	if (t < B2)
		return 7.5625 * (t - B3) * (t - B3) + .75;
	if (t < B4)
		return 7.5625 * (t - B5) * (t - B5) + .9375;
	return 7.5625 * (t - B6) * (t - B6) + .984375;
}
