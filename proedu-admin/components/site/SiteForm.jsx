"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function SiteForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    address: initialData?.address || "",
    image1: initialData?.image1 || "",
    image2: initialData?.image2 || "",
    facebookLink: initialData?.facebookLink || "",
    twitterLink: initialData?.twitterLink || "",
    linkedinLink: initialData?.linkedinLink || "",
    tiktokLink: initialData?.tiktokLink || "",
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

  // const handleImageChange = (image) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     image,
  //   }));

  //   setErrors((prev) => ({
  //     ...prev,
  //     image: "",
  //   }));
  // };
  const handleImageChange = (name, image) => {
    setFormData((prev) => ({
      ...prev,
      [name]: image,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.facebookLink.trim())
      newErrors.facebookLink = "Facebook Link is required";
    if (!formData.twitterLink.trim())
      newErrors.twitterLink = "Twitter Link is required";
    if (!formData.linkedinLink.trim())
      newErrors.linkedinLink = "LinkedIn Link is required";
    if (!formData.tiktokLink.trim())
      newErrors.tiktokLink = "Tiktok Link is required";
    if (!formData.image1) newErrors.image1 = "Main Logo is required";
    if (!formData.image2) newErrors.image2 = "Footer Logo is required";

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
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <Input
        label="Facebook Link"
        name="facebookLink"
        value={formData.facebookLink}
        onChange={handleChange}
        error={errors.facebookLink}
      />
      <Input
        label="Twitter Link"
        name="twitterLink"
        value={formData.twitterLink}
        onChange={handleChange}
        error={errors.twitterLink}
      />
      <Input
        label="LinkedIn Link"
        name="linkedinLink"
        value={formData.linkedinLink}
        onChange={handleChange}
        error={errors.linkedinLink}
      />
      <Input
        label="Tiktok Link"
        name="tiktokLink"
        value={formData.tiktokLink}
        onChange={handleChange}
        error={errors.tiktokLink}
      />

      {/* Image */}

      <PhotoUpload
        name="image1"
        label="Main Logo"
        required
        value={formData.image1}
        onChange={(image) => handleImageChange("image1", image)}
        error={errors.image1}
      />

      <PhotoUpload
        name="image2"
        label="Footer Logo"
        required
        value={formData.image2}
        onChange={(image) => handleImageChange("image2", image)}
        error={errors.image2}
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
          {initialData ? "Update" : "Create"} Site Data
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
