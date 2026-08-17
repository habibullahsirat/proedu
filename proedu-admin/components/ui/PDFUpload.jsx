// "use client";

// import { useCallback, useState, useEffect } from "react";
// import { toast } from "sonner";

// export default function PDFUpload({
//   name,
//   label,
//   value,
//   required = false,
//   onChange,
//   error,
//   disabled = false,
// }) {
//   const [preview, setPreview] = useState(value || null);
//   const [uploading, setUploading] = useState(false);
//   const [dragActive, setDragActive] = useState(false);

//   useEffect(() => {
//     if (value) {
//       setPreview(value);
//     } else {
//       setPreview(null);
//     }
//   }, [value]);

//   const handleFileChange = useCallback(
//     async (file) => {
//       if (!file) return;

//       // Validate file type
//       if (file.type !== "application/pdf") {
//         toast.error("Please select a PDF file");
//         return;
//       }

//       // Validate file size
//       // Maximum: 10MB
//       if (file.size > 10 * 1024 * 1024) {
//         toast.error("PDF file size must be less than 10MB");
//         return;
//       }

//       setUploading(true);

//       try {
//         const formData = new FormData();

//         formData.append("file", file);
//         formData.append("upload_preset", "uamc");

//         const response = await fetch(
//           "https://api.cloudinary.com/v1_1/t5etxjrg/raw/upload",
//           {
//             method: "POST",
//             body: formData,
//           },
//         );

//         if (!response.ok) {
//           throw new Error("Upload failed");
//         }

//         const data = await response.json();

//         console.log("Cloudinary PDF response:", data);

//         // Cloudinary secure URL
//         onChange(data.secure_url);

//         // Show uploaded PDF in the component
//         setPreview(data.secure_url);

//         toast.success(`${label} uploaded successfully`);
//       } catch (error) {
//         console.error("PDF upload error:", error);

//         toast.error(`Failed to upload ${label}`);

//         setPreview(null);
//         onChange("");
//       } finally {
//         setUploading(false);
//       }
//     },
//     [onChange, label],
//   );

//   const handleInputChange = (e) => {
//     if (e.target.files?.[0]) {
//       handleFileChange(e.target.files[0]);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     setDragActive(false);

//     if (e.dataTransfer.files?.[0]) {
//       handleFileChange(e.dataTransfer.files[0]);
//     }
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     setDragActive(e.type === "dragenter" || e.type === "dragover");
//   };

//   const removePdf = () => {
//     setPreview(null);
//     onChange("");

//     const fileInput = document.getElementById(name);

//     if (fileInput) {
//       fileInput.value = "";
//     }
//   };

//   const containerClasses = [
//     "mt-2 border border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer",
//     dragActive
//       ? "border-sky-500 bg-sky-50"
//       : preview
//         ? "border-green-300 bg-green-50"
//         : "border-gray-300 hover:border-gray-400",
//     uploading ? "opacity-50 cursor-not-allowed" : "",
//   ].join(" ");

//   return (
//     <div>
//       {/* Label */}{" "}
//       <label className="block text-sm font-medium text-gray-700">
//         {label} {required && <span className="text-red-600">*</span>}{" "}
//       </label>
//       {/* Upload Container */}
//       <div
//         className={containerClasses}
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//         onClick={() =>
//           !uploading && !disabled && document.getElementById(name)?.click()
//         }
//       >
//         {/* Hidden File Input */}
//         <input
//           id={name}
//           type="file"
//           accept="application/pdf,.pdf"
//           className="hidden"
//           disabled={uploading || disabled}
//           onChange={handleInputChange}
//         />

//         {/* Uploading */}
//         {uploading ? (
//           <div className="flex flex-col items-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2" />

//             <p className="text-sm text-gray-600">Uploading PDF...</p>
//           </div>
//         ) : preview ? (
//           /* PDF Uploaded */
//           <div className="relative">
//             {/* PDF Icon */}
//             <div className="flex justify-center">
//               <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-red-100">
//                 <svg
//                   className="h-14 w-14 text-red-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M15 4v4h4"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M10 13h4M10 16h4"
//                   />
//                 </svg>
//               </div>
//             </div>

//             {/* PDF Text */}
//             <p className="text-sm font-medium text-gray-700 mt-3">
//               PDF uploaded successfully
//             </p>

//             <p className="text-xs text-gray-500 mt-1">Click to change PDF</p>

//             {/* View PDF */}
//             <a
//               href={preview}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 underline"
//             >
//               View PDF
//             </a>

//             {/* Remove Button */}
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 removePdf();
//               }}
//               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600 transition-colors"
//               aria-label="Remove PDF"
//             >
//               ✕
//             </button>
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="flex flex-col items-center">
//             {/* PDF Icon */}
//             <svg
//               className="mx-auto h-12 w-12 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
//               />

//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M15 4v4h4"
//               />

//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M10 13h4M10 16h4"
//               />
//             </svg>

//             <div className="mt-2">
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium text-blue-600 hover:text-blue-500">
//                   Click to upload PDF
//                 </span>{" "}
//                 or drag and drop
//               </p>

//               <p className="text-xs text-gray-500">PDF up to 10MB</p>

//               {!required && (
//                 <p className="text-xs text-gray-400 mt-1">(Optional)</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Validation Error */}
//       {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
//     </div>
//   );
// }

// version 2
"use client";

import { useCallback, useState, useEffect } from "react";
import { toast } from "sonner";

export default function PDFUpload({
  name,
  label,
  value,
  required = false,
  onChange,
  error,
  disabled = false,
}) {
  const [preview, setPreview] = useState(value || null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (value) {
      setPreview(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleFileChange = useCallback(
    async (file) => {
      if (!file) return;

      // Validate file type
      if (file.type !== "application/pdf") {
        toast.error("Please select a PDF file");
        return;
      }

      // Validate file size
      // Maximum: 10MB
      if (file.size > 10 * 1024 * 1024) {
        toast.error("PDF file size must be less than 10MB");
        return;
      }

      setUploading(true);

      try {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "maheen-accessories");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/t5etxjrg/raw/upload",
          {
            method: "POST",
            body: formData,
          },
        );

        // Always read the body first — Cloudinary returns a JSON
        // error payload even on 400/401, and that payload tells us
        // exactly why the upload was rejected.
        const data = await response.json();

        if (!response.ok) {
          console.error("Cloudinary error response:", data);

          throw new Error(
            data?.error?.message || `Upload failed (status ${response.status})`,
          );
        }

        console.log("Cloudinary PDF response:", data);

        // Cloudinary secure URL
        onChange(data.secure_url);

        // Show uploaded PDF in the component
        setPreview(data.secure_url);

        toast.success(`${label} uploaded successfully`);
      } catch (error) {
        console.error("PDF upload error:", error);

        toast.error(error.message || `Failed to upload ${label}`);

        setPreview(null);
        onChange("");
      } finally {
        setUploading(false);
      }
    },
    [onChange, label],
  );

  const handleInputChange = (e) => {
    if (e.target.files?.[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    if (e.dataTransfer.files?.[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const removePdf = () => {
    setPreview(null);
    onChange("");

    const fileInput = document.getElementById(name);

    if (fileInput) {
      fileInput.value = "";
    }
  };

  const containerClasses = [
    "mt-2 border border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer",
    dragActive
      ? "border-sky-500 bg-sky-50"
      : preview
        ? "border-green-300 bg-green-50"
        : "border-gray-300 hover:border-gray-400",
    uploading ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");

  return (
    <div>
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      {/* Upload Container */}
      <div
        className={containerClasses}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() =>
          !uploading && !disabled && document.getElementById(name)?.click()
        }
      >
        {/* Hidden File Input */}
        <input
          id={name}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          disabled={uploading || disabled}
          onChange={handleInputChange}
        />

        {/* Uploading */}
        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2" />
            <p className="text-sm text-gray-600">Uploading PDF...</p>
          </div>
        ) : preview ? (
          /* PDF Uploaded */
          <div className="relative">
            {/* PDF Icon */}
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-red-100">
                <svg
                  className="h-14 w-14 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 4v4h4"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 13h4M10 16h4"
                  />
                </svg>
              </div>
            </div>

            {/* PDF Text */}
            <p className="text-sm font-medium text-gray-700 mt-3">
              PDF uploaded successfully
            </p>

            <p className="text-xs text-gray-500 mt-1">Click to change PDF</p>

            {/* View PDF */}
            <a
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 underline"
            >
              View PDF
            </a>

            {/* Remove Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removePdf();
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600 transition-colors"
              aria-label="Remove PDF"
            >
              ✕
            </button>
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center">
            {/* PDF Icon */}
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 4v4h4"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 13h4M10 16h4"
              />
            </svg>

            <div className="mt-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-blue-600 hover:text-blue-500">
                  Click to upload PDF
                </span>{" "}
                or drag and drop
              </p>

              <p className="text-xs text-gray-500">PDF up to 10MB</p>

              {!required && (
                <p className="text-xs text-gray-400 mt-1">(Optional)</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Validation Error */}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
