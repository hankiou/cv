export function getYearDiff(startDate: Date, endDate: Date) {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const diffInMs = endDate.getTime() - startDate.getTime();
  return (diffInMs / msPerYear).toFixed(2);
}
