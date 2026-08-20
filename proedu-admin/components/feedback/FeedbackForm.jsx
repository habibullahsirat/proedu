"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function FeedbackForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    feedback: initialData?.feedback || "",
    rating: initialData?.rating || 5,
    name: initialData?.name || "",
    department: initialData?.department || "",
    image: initialData?.image || "",
  });

  const [errors, setErrors] = useState({});

  // ============================
  // Normal Fields
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Rating
  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));

    if (errors.rating) {
      setErrors((prev) => ({
        ...prev,
        rating: "",
      }));
    }
  };

  // ============================
  // Image
  // ============================

  const handleImageChange = (image) => {
    setFormData((prev) => ({
      ...prev,
      image,
    }));

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";
    if (!formData.rating) newErrors.rating = "Rating is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================
  // Submit
  // ============================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);
  };

  // ============================
  // UI
  // ============================

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Feedback"
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        error={errors.feedback}
      />
      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Rating <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              className={`text-2xl focus:outline-none ${
                formData.rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {formData.rating >= star ? "★" : "☆"}
            </button>
          ))}
        </div>
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
        )}
      </div>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
      />

      {/* Image */}

      <PhotoUpload
        name="image"
        label="Hero Image"
        required
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-6 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {initialData ? "Update" : "Create"} Feedback
        </button>
      </div>
    </form>
  );
}

// =========================================

function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      <input
        {...props}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
