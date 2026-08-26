import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaBuilding,
  FaCalendarAlt,
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";
import {
  SiAnthropic,
  SiPython,
} from "react-icons/si";

import awsBadge from "../assets/badges/aws-clf-c02.png";
import awsTrainingBadge from "../assets/badges/aws-training.png";
import claudeBadge from "../assets/badges/claude-cca-f.png";
import claude101Certificate from "../assets/badges/claude-101.png";

import "./Credentials.css";

/* ───────────────────────── FEATURED ───────────────────────── */

const featuredCredentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "CLF-C02",
    issuer: "Amazon Web Services",
    issued: "July 2026",
    expiry: "July 2029",
    badge: awsBadge,
    icon: FaAws,
    link:
      "https://www.credly.com/badges/ee6ec9b7-307f-4c18-b319-5276687b566e/public_url",
  },
  {
    title: "Claude Certified Architect",
    subtitle: "Foundations (CCA-F)",
    issuer: "Anthropic",
    issued: "June 2026",
    expiry: "June 2027",
    badge: claudeBadge,
    icon: SiAnthropic,
    link:
      "https://www.credly.com/badges/cc622df0-f2a5-4a11-810a-4292f90f346f/public_url",
  },
];

/* ───────────────────────── LEARNING ───────────────────────── */

const learningCredentials = [
  {
    title: "AWS Academy Cloud Operations",
    issuer: "Amazon Web Services",
    issued: "February 2025",
    image: awsTrainingBadge,
    icon: FaAws,
    verification: "Verified via Credly",
    link:
      "https://www.credly.com/earner/earned/badge/4b95486b-cf59-464a-ad6e-8f3e4f6d24d8",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    issued: "June 2026",
    image: claude101Certificate,
    icon: SiAnthropic,
    verification: "Verified via Skilljar",
    link: "https://verify.skilljar.com/c/mtwqo2x6fzfm",
  },
];

/* ───────────────────────── OTHER ───────────────────────── */

const otherCertifications = [
  {
    title: "Machine Learning using Python",
    issuer: "INI",
    issued: "2025",
    icon: SiPython,
    link:
      "https://drive.google.com/file/d/1T4B-0ZYJvnQsHeGqJWQo-GvfhKPgWSUU/view",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
    issued: "2025",
    icon: FaCertificate,
    link:
      "https://drive.google.com/file/d/1eQW-NZkbxnJ_JjGp3tx1_B_75C9_ro9Z/view",
  },
  {
    title: "Python Summer Training",
    issuer: "SkillStone",
    issued: "June 2024",
    description:
      "Completed hands-on training in core Python concepts including OOP, functions, file handling, and scripting, and developed a Django-based MyUtility-App.",
    icon: SiPython,
    link:
      "https://drive.google.com/file/d/1-mdlFQwnTHQYO1zqNBFvZqzrIXSforWY/view",
  },
  {
    title: "Smart India Hackathon 2024",
    issuer: "Internal Smart India Hackathon",
    issued: "September 2024",
    role: "Team Leader",
    description:
      "Led a six-member team, coordinating task allocation, timelines, collaboration, development, and the final presentation.",
    icon: FaTrophy,
    link:
      "https://drive.google.com/file/d/10hdeedMwFuSVwm-HAFirn5p_UiTudi28/view?usp=sharing",
  },

];

/* ───────────────────────── FEATURED CARD ───────────────────────── */

function CredentialCard({ credential, index }) {
  const IssuerIcon = credential.icon;

  return (
    <motion.a
      href={credential.link}
      target="_blank"
      rel="noopener noreferrer"
      className="credential-card"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.12 + index * 0.15,
        duration: 0.45,
      }}
      whileHover={{ y: -6 }}
    >
      <div className="credential-card-top">
        <div className="credential-badge-wrap">
          <img
            src={credential.badge}
            alt={`${credential.title} badge`}
          />
        </div>

        <span className="credential-verified">
          <FaShieldAlt />
          Verified via Credly
        </span>
      </div>

      <div className="credential-title-row">
        <div>
          <h2>{credential.title}</h2>

          {credential.subtitle && (
            <p className="credential-subtitle">
              {credential.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="credential-details">
        <p>
          <FaBuilding />
          <span>
            <small>Issuer</small>
            {credential.issuer}
          </span>
        </p>

        <p>
          <FaCalendarAlt />
          <span>
            <small>Issued</small>
            {credential.issued}
          </span>
        </p>

        <p>
          <FaCalendarAlt />
          <span>
            <small>Expiry</small>
            {credential.expiry}
          </span>
        </p>
      </div>

      <span className="credential-link">
        View credential
        <FaExternalLinkAlt />
      </span>

      <div className="credential-corner-icon">
        <IssuerIcon />
      </div>
    </motion.a>
  );
}

/* ───────────────────────── LEARNING CARD ───────────────────────── */

function LearningCard({ credential, index }) {
  const CredentialIcon = credential.icon;

  return (
    <motion.a
      href={credential.link}
      target="_blank"
      rel="noopener noreferrer"
      className="learning-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.48 + index * 0.1,
        duration: 0.4,
      }}
      whileHover={{ y: -4 }}
    >
      <div className="learning-badge">
        <img
          src={credential.image}
          alt={`${credential.title} credential`}
        />
      </div>

      <div className="learning-content">
        <div className="learning-heading">
          <h3>{credential.title}</h3>

          <span className="learning-type">
            <FaGraduationCap />
            Learning
          </span>
        </div>

        <div className="learning-meta">
          <span>
            <CredentialIcon />
            {credential.issuer}
          </span>

          <span>
            <FaCalendarAlt />
            {credential.issued}
          </span>
        </div>

        <span className="learning-verify">
          <FaShieldAlt />
          {credential.verification}
          <FaExternalLinkAlt />
        </span>
      </div>
    </motion.a>
  );
}

/* ───────────────────────── OTHER CARD ───────────────────────── */

function OtherCertificationCard({ credential, index }) {
  const CredentialIcon = credential.icon;

  const content = (
    <>
      <div className="other-cert-icon">
        <CredentialIcon />
      </div>

      <div className="other-cert-content">
        <div className="other-cert-heading">
          <h3>{credential.title}</h3>

          {credential.role && (
            <span className="other-cert-role">
              {credential.role}
            </span>
          )}
        </div>

        <p className="other-cert-meta">
          {credential.issuer}
          <b>·</b>
          {credential.issued}
        </p>

        {credential.description && (
          <p className="other-cert-description">
            {credential.description}
          </p>
        )}
      </div>

      {credential.link && (
        <FaExternalLinkAlt className="other-cert-external" />
      )}
    </>
  );

  return credential.link ? (
    <motion.a
      href={credential.link}
      target="_blank"
      rel="noopener noreferrer"
      className="other-cert-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.68 + index * 0.08,
        duration: 0.35,
      }}
      whileHover={{ y: -3 }}
    >
      {content}
    </motion.a>
  ) : (
    <motion.article
      className="other-cert-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.68 + index * 0.08,
        duration: 0.35,
      }}
      whileHover={{ y: -3 }}
    >
      {content}
    </motion.article>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Certifications() {
  return (
    <main className="credential-page min-h-screen pt-24 pb-20 px-4 sm:px-6">
      <div
        className="credential-orb credential-orb-left"
        aria-hidden="true"
      />

      <div
        className="credential-orb credential-orb-right"
        aria-hidden="true"
      />

      <div className="credential-content max-w-6xl mx-auto">

        {/* ───────────────────────── HERO ───────────────────────── */}

        <motion.header
          className="credential-hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="credential-kicker">
            SYSTEM / CREDENTIALS
          </p>

          <h1 className="text-gradient font-['Space_Grotesk']">
            Professional Credentials
          </h1>

          <p className="credential-subtitle">
            Professional certifications, learning credentials,
            and achievements collected throughout my engineering journey.
          </p>
        </motion.header>

        {/* ───────────────────────── FEATURED ───────────────────────── */}

        <section
          className="credentials-section"
          aria-labelledby="featured-heading"
        >
          <motion.div
            id="featured-heading"
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.04 }}
          >
            <span />
            <span className="section-icon">
              <FaShieldAlt />
            </span>
            Featured Credentials
          </motion.div>

          <div className="credential-grid">
            {featuredCredentials.map((credential, index) => (
              <CredentialCard
                key={credential.title}
                credential={credential}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ───────────────────────── LEARNING ───────────────────────── */}

        <section
          className="credentials-section learning-section"
          aria-labelledby="learning-heading"
        >
          <motion.div
            id="learning-heading"
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span />
            <span className="section-icon">
              <FaGraduationCap />
            </span>
            Learning Credentials
          </motion.div>

          <div className="learning-grid">
            {learningCredentials.map((credential, index) => (
              <LearningCard
                key={credential.title}
                credential={credential}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ───────────────────────── OTHER ───────────────────────── */}

        <section
          className="credentials-section other-section"
          aria-labelledby="other-heading"
        >
          <motion.div
            id="other-heading"
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span />
            <span className="section-icon">
              <FaCertificate />
            </span>
            Other Certifications
          </motion.div>

          <div className="other-cert-grid">
            {otherCertifications.map((credential, index) => (
              <OtherCertificationCard
                key={credential.title}
                credential={credential}
                index={index}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}