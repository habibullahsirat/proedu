import mongoose, { Schema } from "mongoose";

// CTA Button
// const ctaSchema = new Schema(
//   {
//     text: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     href: {
//       type: String,
//       trim: true,
//     },
//   },
//   { _id: false },
// );

// //Hero Section
// // Program Item
// const programSchema = new Schema(
//   {
//     programTitle: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     programDescription: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     href: {
//       type: String,
//       trim: true,
//       default: "#",
//     },
//   },
//   { _id: false },
// );

// Hero Section
const heroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    ctaTitle: {
      type: String,
      required: true,
      trim: true,
    },

    ctaLink: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Notice Section
const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    noticeType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent mongoose from returning cached models with old schemas during Next.js HMR
delete mongoose.models.HeroSection;
delete mongoose.models.NoticeSection;

export const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSectionSchema);

export const NoticeSection =
  mongoose.models.NoticeSection ||
  mongoose.model("NoticeSection", NoticeSchema);
