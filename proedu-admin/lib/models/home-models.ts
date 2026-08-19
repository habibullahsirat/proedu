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

// Explore Section
const ExploreSchema = new mongoose.Schema(
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
    stat1: { type: String, required: true, trim: true },
    stat2: { type: String, required: true, trim: true },
    stat3: { type: String, required: true, trim: true },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// FAQ Section
const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Feedback Section
const FeedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Course Section
const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Partners
const PartnerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent mongoose from returning cached models with old schemas during Next.js HMR
delete mongoose.models.HeroSection;
delete mongoose.models.ExploreSection;
delete mongoose.models.FAQSection;
delete mongoose.models.FeedbackSchema;
delete mongoose.models.CourseSection;
delete mongoose.models.PartnerSection;

export const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSectionSchema);

export const ExploreSection =
  mongoose.models.ExploreSection ||
  mongoose.model("ExploreSection", ExploreSchema);

export const FAQSection =
  mongoose.models.FAQSection || mongoose.model("FAQSection", FAQSchema);

export const FeedbackSection =
  mongoose.models.FeedbackSection ||
  mongoose.model("FeedbackSection", FeedbackSchema);

export const CourseSection =
  mongoose.models.CourseSection ||
  mongoose.model("CourseSection", CourseSchema);

export const PartnerSection =
  mongoose.models.PartnerSection ||
  mongoose.model("PartnerSection", PartnerSchema);
