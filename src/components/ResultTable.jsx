import DataRow from "./DataRow";

export default function ResultTable({ result }) {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>investment value</th>
            <th>interest(year)</th>
            <th>total interest</th>
            <th>invested capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => {
              return (
                <DataRow key={data.year} data={data} />
              );
          })}
        </tbody>
      </table>
    </div>
  );
}
