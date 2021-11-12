import { smoothStepInOut } from "./smoothStepInOut";


export function smoothStepOut(t: number): number {
	return 2 * smoothStepInOut(t / 2 + 0.5) - 1;
}
