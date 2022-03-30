export type Obj = Record<string | number | symbol, unknown>;

export const isObj = (raw: unknown): raw is Obj =>
    typeof raw === "object" &&
    raw !== undefined &&
    raw !== null &&
    !Array.isArray(raw);