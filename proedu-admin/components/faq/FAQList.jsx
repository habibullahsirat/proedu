"use client";

export default function FAQList({ FAQ, onEdit, onDelete, isDeleting }) {
  if (!FAQ) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (FAQ.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">
          No FAQ found. Add your first FAQ!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FAQ.map((FAQ) => (
        <div
          key={FAQ._id}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* Content Section */}
          <div className="p-4">
            <p className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
              {FAQ.question}
            </p>
            <p className="text-gray-600 mb-4 line-clamp-2">{FAQ.answer}</p>

            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>ID: {FAQ._id.slice(-6)}</span>
              <span>
                Updated: {new Date(FAQ.updatedAt).toLocaleDateString()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => onEdit(FAQ)}
                className="px-3 py-1.5 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-1 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
              <button
                onClick={() => onDelete(FAQ._id)}
                disabled={isDeleting}
                className="px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
