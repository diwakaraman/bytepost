import React, { useEffect, useState } from "react";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reports data from backend
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/reports"); // Change to your API route
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error("Error fetching reports:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) {
    return <p className="text-center mt-5 text-gray-600">Loading reports...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">User Reports</h1>

      {reports.length === 0 ? (
        <p className="text-gray-500">No reports found.</p>
      ) : (
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Report ID</th>
              <th className="p-3 border-b">Reported By</th>
              <th className="p-3 border-b">Reason</th>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{report._id}</td>
                <td className="p-3 border-b">{report.reportedBy?.name || "Unknown"}</td>
                <td className="p-3 border-b">{report.reason}</td>
                <td className="p-3 border-b">
                  {new Date(report.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      report.status === "resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reports;
