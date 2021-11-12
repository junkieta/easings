import { smootherStepInOut } from "./smootherStepInOut";


export function smootherStepOut(t: number): number {
	return 2 * smootherStepInOut(t / 2 + 0.5) - 1;
}
