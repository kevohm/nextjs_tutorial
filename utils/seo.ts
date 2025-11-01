import type { Metadata } from "next";

export const seo: Metadata = {
  title: "HealthConnect | Telemedicine & Healthcare Appointment System",
  description:
    "HealthConnect is a comprehensive telemedicine platform that connects patients with verified healthcare providers for secure video consultations, appointment scheduling, electronic health records management, and prescription handling. Designed for both remote and in-person healthcare delivery with advanced security, analytics, and compliance features.",
  keywords: [
    "HealthConnect",
    "Telemedicine Platform",
    "Healthcare Appointment System",
    "EHR Management",
    "HIPAA Compliance",
    "Video Consultation",
    "Patient Portal",
    "Doctor Dashboard",
    "Secure Messaging",
    "Healthcare Analytics",
    "Prescription Management",
  ],
  authors: [{ name: "HealthConnect Team" }],
  openGraph: {
    title: "HealthConnect | Telemedicine & Healthcare Appointment System",
    description:
      "HealthConnect bridges patients and healthcare providers through appointments, video consultations, EHR, and analytics — all in one secure platform.",
    url: "https://healthconnect.co.ke",
    siteName: "HealthConnect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HealthConnect Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthConnect | Telemedicine & Healthcare Appointment System",
    description:
      "Book appointments, consult doctors, manage records, and communicate securely — all in one seamless telemedicine experience.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://healthconnect.co.ke"),
  category: "Healthcare Technology",
  themeColor: "#ea580c",
};
