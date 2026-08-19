"use client";

import { useEffect, useState } from "react";
import {
  ImageIcon,
  Package,
  ShieldCheck,
  ShoppingCart,
  Star,
  Users,
  Briefcase,
  FolderOpen,
} from "lucide-react";

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

const API_BASE = "https://proedu-admin.vercel.app";

export default function AdminDashboardPage() {
  const [email, setEmail] = useState("");

  const [stats, setStats] = useState({
    department: 0,
    student: 0,
    Image: 0,
    member: 0,
    feedback: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem("adminEmail") || "");
  }, []);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const endpoints = [
          "api/hero",
          "api/explore",
          "api/course",
          "api/faq",
          "api/feedback",
        ];

        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(`${API_BASE}/${endpoint}`).then((res) => res.json()),
          ),
        );

        setStats({
          department: responses[0]?.length || 0,
          student: responses[1]?.length || 0,
          Image: responses[2]?.length || 0,
          member: responses[3]?.length || 0,
          feedback: responses[4]?.length || 0,
        });
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const cards = [
    {
      label: "Hero",
      value: stats.department,
      icon: ShoppingCart,
    },
    {
      label: "Explore",
      value: stats.student,
      icon: Package,
    },
    {
      label: "Course",
      value: stats.Image,
      icon: ImageIcon,
    },
    {
      label: "FAQ",
      value: stats.member,
      icon: Briefcase,
    },
    {
      label: "Feedbacks",
      value: stats.feedback,
      icon: Star,
    },
  ];

  return (
    <div>
      <h2
        className="text-[#0E1116] text-2xl tracking-tight mb-1"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        Welcome back{email ? `, ${email.split("@")[0]}` : ""}
      </h2>

      <p className="text-[#6B7280] text-sm mb-8">
        Here's what's happening across your website today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-[#E5E3DE] p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0E1116] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E8A33D]" strokeWidth={2} />
                </div>

                <span className="text-[11px] font-medium text-[#16A34A] bg-[#F0FDF4] px-2 py-1 rounded-full">
                  Total
                </span>
              </div>

              <p className="text-[#0E1116] text-3xl font-semibold tracking-tight">
                {loading ? "..." : card.value}
              </p>

              <p className="text-[#9CA3AF] text-[13px] mt-1">{card.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
