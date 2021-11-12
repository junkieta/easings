import { ELASTIC_AMPLITUDE } from "./Constants";
import { ELASTIC_PERIOD } from "./Constants";
export function elasticIn(t: number): number {
	return -(ELASTIC_AMPLITUDE * Math.pow(2,
		10 * (t -= 1)) * Math.sin((t - (ELASTIC_PERIOD / (2 * Math.PI) * Math.asin(1 / ELASTIC_AMPLITUDE))) * (2 * Math.PI) / ELASTIC_PERIOD));
}
