import React from "react";

function UpdatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Latest updates</h1>
      <div className="mt-2">
        <table>
          <tr>
            <td className="text-gray-700">[23-02-2025] - </td>
            <td className="text-gray-700">ui updates</td>
          </tr>
          <tr>
            <td className="text-gray-700">[23-02-2025] - </td>
            <td className="text-gray-700">forms added</td>
          </tr>
          <tr>
            <td className="text-gray-700">[23-02-2025] - </td>
            <td className="text-gray-700">loaders</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default UpdatesPage;
