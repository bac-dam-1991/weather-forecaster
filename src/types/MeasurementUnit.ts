export const MeasurementUnits = ["standard", "metric", "imperial"] as const;

export type MeasurementUnitType = typeof MeasurementUnits[number];
