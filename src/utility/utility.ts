export const arrayDiff = <T extends unknown>(
	array01: T[],
	array02: T[]
): T[] => {
	return array01.filter((item: T) => !array02.includes(item));
};
