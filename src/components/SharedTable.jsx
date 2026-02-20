export const SharedTable = ({ headers, data, renderRow }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-50">
        <tr>
          {headers.map(h => <th key={h} className="px-4 py-2 font-medium text-gray-900 text-left">{h}</th>)}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((item, idx) => renderRow(item, idx))}
      </tbody>
    </table>
  </div>
);