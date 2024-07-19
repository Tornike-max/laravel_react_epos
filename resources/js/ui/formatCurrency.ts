export function formatCurrency(salary: number): string {
  return `$${salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
