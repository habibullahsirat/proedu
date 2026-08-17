"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function HeroForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    subtitle: initialData?.subtitle || "",

    image: initialData?.image || "",

    cta: {
      text: initialData?.cta?.text || "",
      href: initialData?.cta?.href || "",
    },

    programHeading: initialData?.programHeading || "",

    programs:
      initialData?.programs?.length > 0
        ? initialData.programs
        : [
            {
              programTitle: "",
              programDescription: "",
              href: "",
            },
          ],
  });

  const [errors, setErrors] = useState({});

  // ============================
  // Normal Fields
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("cta.")) {
      const field = name.split(".")[1];

      setFormData((prev) => ({
        ...prev,
        cta: {
          ...prev.cta,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

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
  // Programs
  // ============================

  const handleProgramChange = (index, field, value) => {
    const updated = [...formData.programs];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      programs: updated,
    }));
  };

  const addProgram = () => {
    setFormData((prev) => ({
      ...prev,
      programs: [
        ...prev.programs,
        {
          programTitle: "",
          programDescription: "",
          href: "",
        },
      ],
    }));
  };

  const removeProgram = (index) => {
    const updated = formData.programs.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      programs: updated.length
        ? updated
        : [
            {
              programTitle: "",
              programDescription: "",
              href: "",
            },
          ],
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";

    if (!formData.subtitle.trim()) newErrors.subtitle = "Subtitle is required";

    if (!formData.programHeading.trim()) newErrors.programHeading = "Required";

    if (!formData.image) newErrors.image = "Image is required";

    formData.programs.forEach((item, index) => {
      if (!item.programTitle.trim()) {
        newErrors[`programTitle_${index}`] = "Program title is required";
      }

      if (!item.programDescription.trim()) {
        newErrors[`programDescription_${index}`] =
          "Program description is required";
      }
    });

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
        label="Subtitle"
        name="subtitle"
        value={formData.subtitle}
        onChange={handleChange}
        error={errors.subtitle}
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

      {/* CTA */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">CTA Button</h2>

        <Input
          label="Button Text"
          name="cta.text"
          value={formData.cta.text}
          onChange={handleChange}
        />

        <div className="mt-4">
          <Input
            label="Button Link"
            name="cta.href"
            value={formData.cta.href}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Program Heading */}

      <div className="border-t pt-6">
        <Input
          label="Program Heading"
          name="programHeading"
          value={formData.programHeading}
          onChange={handleChange}
          error={errors.programHeading}
        />
      </div>

      {/* Programs */}

      <div className="border rounded-lg p-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold">Programs</h2>

          <button
            type="button"
            onClick={addProgram}
            className="bg-blue-600 text-white px-3 py-2 rounded"
          >
            + Add Program
          </button>
        </div>

        {formData.programs.map((program, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <Input
              label={`Program ${index + 1} Title`}
              value={program.programTitle}
              onChange={(e) =>
                handleProgramChange(index, "programTitle", e.target.value)
              }
              error={errors[`programTitle_${index}`]}
            />

            <div className="mt-4">
              <Input
                label="Program Description"
                value={program.programDescription}
                onChange={(e) =>
                  handleProgramChange(
                    index,
                    "programDescription",
                    e.target.value,
                  )
                }
                error={errors[`programDescription_${index}`]}
              />
            </div>

            <div className="mt-4">
              <Input
                label="Program Link"
                value={program.href}
                onChange={(e) =>
                  handleProgramChange(index, "href", e.target.value)
                }
              />
            </div>

            <button
              type="button"
              onClick={() => removeProgram(index)}
              className="mt-4 text-red-600 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

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
          {initialData ? "Update" : "Create"} Hero
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
