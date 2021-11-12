import { smoothStepInOut } from "./smoothStepInOut";


export function smoothStepIn(t: number): number {
	return 2 * smoothStepInOut(t / 2);
}
