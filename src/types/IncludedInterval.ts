export const Intervals = [
	"current",
	"minutely",
	"hourly",
	"daily",
	"alerts",
] as const;

export type IntervalType = typeof Intervals[number];

export const allIntervals: IntervalType[] = [
	"current",
	"minutely",
	"hourly",
	"daily",
	"alerts",
];
