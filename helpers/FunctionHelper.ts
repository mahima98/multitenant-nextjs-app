export const switchOptimiser =
  (caseType: any, defaultCase = "_default") =>
  (exp: string, data: any) =>
    (caseType[exp] || caseType[defaultCase])(data);
