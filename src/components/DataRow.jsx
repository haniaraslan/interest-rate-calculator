import { formatter } from "../util/investment";

export default function DataRow({ data }) {
  return (
    <tr>
      <th>{data.year}</th>
      <th>{formatter.format(data.valueEndOfYear)}</th>
      <th>{formatter.format(data.interest)}</th>
      <th>{formatter.format(data.totalInterest)}</th>
      <th>{formatter.format(data.totalInvestedCapital)}</th>
    </tr>
  );
}
