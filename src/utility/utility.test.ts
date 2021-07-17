import { allIntervals, IntervalType } from "../types/IncludedInterval";
import { arrayDiff } from "./utility";

describe("Unit tests: arrayDiff", () => {
	it("Should return [1]", () => {
		const array01 = [1, 2, 3];
		const array02 = [2, 3, 4];
		const result = arrayDiff(array01, array02);
		const expectedResult = [1];
		expect(result).toStrictEqual(expectedResult);
	});

	it("Should return [hourly, minutely, alerts, current]", () => {
		const includedIntervals: IntervalType[] = ["daily"];
		const result = arrayDiff(allIntervals, includedIntervals);
		const expectedResult = ["current", "minutely", "hourly", "alerts"];
		expect(result).toStrictEqual(expectedResult);
	});
});

export {};
