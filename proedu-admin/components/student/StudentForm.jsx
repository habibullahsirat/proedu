"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function StudentForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
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

    if (!formData.title.trim()) newErrors.title = "Name is required";
    if (!formData.description.trim())
      newErrors.description = "Department is required";

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
        label="Student Name"
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
        label="Student Image"
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
          {initialData ? "Update" : "Create"} Student
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
