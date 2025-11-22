import React, { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    reportedBy: "",
    reason: "",
    status: "pending",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit report");
      }

      setMessage("Report submitted successfully ✅");
      setFormData({
        reportedBy: "",
        reason: "",
        status: "pending",
      });
    } catch (err) {
      setMessage("❌ Error submitting report");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Report</h1>
      
      {message && (
        <p
          className={`mb-4 text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Reported By */}
        <div>
          <label className="block text-sm font-medium mb-1">Reported By</label>
          <input
            type="text"
            name="reportedBy"
            value={formData.reportedBy}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg w-full p-2"
            placeholder="Enter reporter's name"
            required
          />
        </div>

       
        <div>
          <label className="block text-sm font-medium mb-1">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg w-full p-2"
            placeholder="Enter reason for the report"
            rows="3"
            required
          ></textarea>
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg w-full p-2"
          >
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition"
        >
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
