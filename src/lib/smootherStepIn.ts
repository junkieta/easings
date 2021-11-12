import { smootherStepInOut } from "./smootherStepInOut";
export function smootherStepIn(t: number): number {
	return 2 * smootherStepInOut(t / 2);
}
