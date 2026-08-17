import mongoose, { Schema } from "mongoose";

// CTA Button
const ctaSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

//Hero Section
// Program Item
const programSchema = new Schema(
  {
    programTitle: {
      type: String,
      required: true,
      trim: true,
    },

    programDescription: {
      type: String,
      required: true,
      trim: true,
    },

    href: {
      type: String,
      trim: true,
      default: "#",
    },
  },
  { _id: false },
);

// Hero Section
const heroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    cta: {
      type: ctaSchema,
      required: true,
    },

    // Right Side Heading
    programHeading: {
      type: String,
      required: true,
      trim: true,
    },

    // Dynamic Programs
    programs: {
      type: [programSchema],
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

// Publication Section
const PublicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    publicationType: {
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
delete mongoose.models.PublicationSection;
delete mongoose.models.AboutSchema;
delete mongoose.models.StatSchema;
delete mongoose.models.FeatureSchema;
delete mongoose.models.FindDepartmentSchemaLeft;
delete mongoose.models.FindDepartmentSchemaRight;
delete mongoose.models.AdmissionSchema;
delete mongoose.models.PrincipleMessageSchema;
delete mongoose.models.CampusLifeSchema;
delete mongoose.models.AlumniEventImageSchema;
delete mongoose.models.AlumniEventSchema;
delete mongoose.models.NewsSchema;
delete mongoose.models.FeedbackSection;

export const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSectionSchema);

export const NoticeSection =
  mongoose.models.NoticeSection ||
  mongoose.model("NoticeSection", NoticeSchema);

export const PublicationSection =
  mongoose.models.PublicationSection ||
  mongoose.model("PublicationSection", PublicationSchema);

export const AboutSection =
  mongoose.models.AboutSection || mongoose.model("AboutSection", AboutSchema);

export const StatSection =
  mongoose.models.StatSection || mongoose.model("StatSection", StatSchema);

export const FindDepartmentLeft =
  mongoose.models.FindDepartmentLeft ||
  mongoose.model("FindDepartmentLeft", FindDepartmentSchemaLeft);

export const FindDepartmentRight =
  mongoose.models.FindDepartmentRight ||
  mongoose.model("FindDepartmentRight", FindDepartmentSchemaRight);

export const AdmissionSection =
  mongoose.models.AdmissionSection ||
  mongoose.model("AdmissionSection", AdmissionSchema);

export const Feature =
  mongoose.models.Feature || mongoose.model("Feature", FeatureSchema);

export const PrincipleMessage =
  mongoose.models.PrincipleMessage ||
  mongoose.model("PrincipleMessage", PrincipleMessageSchema);

export const CampusLifeSection =
  mongoose.models.CampusLifeSection ||
  mongoose.model("CampusLifeSection", CampusLifeSchema);

export const AlumniEventImage =
  mongoose.models.AlumniEventImage ||
  mongoose.model("AlumniEventImage", AlumniEventImageSchema);

export const AlumniEvent =
  mongoose.models.AlumniEvent ||
  mongoose.model("AlumniEvent", AlumniEventSchema);

export const NewsSection =
  mongoose.models.NewsSection || mongoose.model("NewsSection", NewsSchema);

export const FeedbackSection =
  mongoose.models.FeedbackSection ||
  mongoose.model("FeedbackSection", feedbackSectionSchema);
