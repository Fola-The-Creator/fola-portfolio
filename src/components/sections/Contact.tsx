"use client";

import { ArrowRight, Check, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ENDPOINT,
  GITHUB_PROFILE_URL,
} from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const fieldLabels = {
  name: "Your Name",
  email: "Email Address",
  subject: "Subject",
} as const;

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    // Bots fill in every field, including this hidden one.
    const honeypot = new FormData(e.currentTarget).get("_honey");
    if (honeypot) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio enquiry: ${formData.subject}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => null);
      const delivered =
        response.ok &&
        (result?.success === true || result?.success === "true");

      if (!delivered) throw new Error(result?.message ?? "Request failed");

      setFormData(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const socialLinks = [
    { icon: SiGithub, url: GITHUB_PROFILE_URL, label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/fola-adebanjo-245154230/", label: "LinkedIn" },
    { icon: SiX, url: "https://x.com/folathecreator_", label: "Twitter" },
    { icon: SiInstagram, url: "https://www.instagram.com/folathecreator_/", label: "Instagram" },
  ];

  return (
    <section
      id="contact"
      className="py-32 border-t border-grey-200 bg-grey-0 overflow-hidden"
    >
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-8 leading-tight tracking-tight max-w-3xl">
            Let&apos;s talk about your project
          </h2>

          <p className="text-grey-700 text-lg max-w-2xl mb-16">
            Tell me what you&apos;re working on and I&apos;ll get back to you.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <RevealOnScroll delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot: hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />

              {(["name", "email", "subject"] as const).map((field) => (
                <div key={field} className="relative">
                  <input
                    id={`contact-${field}`}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput(field)}
                    onBlur={() => setFocusedInput(null)}
                    autoComplete={field === "subject" ? "off" : field}
                    className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-colors duration-300 focus:border-grey-900"
                    required
                  />
                  <label
                    htmlFor={`contact-${field}`}
                    className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${focusedInput === field || formData[field]
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                      }`}
                  >
                    {fieldLabels[field]}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-colors duration-300 focus:border-grey-900 resize-none"
                  required
                />
                <label
                  htmlFor="contact-message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${focusedInput === "message" || formData.message
                    ? "text-xs text-grey-700 -top-4"
                    : "text-base text-grey-700 top-4"
                    }`}
                >
                  Your Message
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 rounded-full hover:bg-grey-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-wait"
                  >
                    <span className="tracking-wide">
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </span>
                    {status === "sending" ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>
                </MagneticButton>

                <p role="status" aria-live="polite" className="text-sm leading-relaxed">
                  {status === "sent" && (
                    <span className="inline-flex items-center gap-2 text-grey-900">
                      <Check size={16} />
                      Thanks! Your message is on its way. I&apos;ll be in touch soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-grey-700">
                      Sorry, that didn&apos;t go through. Please try again or{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-1 text-grey-900 underline underline-offset-4"
                      >
                        email me <ArrowRight size={12} />
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </form>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-grey-900 font-medium text-xl mb-4 tracking-tight">
                  Connect
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 border border-grey-200 rounded-full flex items-center justify-center hover:border-grey-900 hover:bg-grey-900 hover:text-grey-0 transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-grey-900 text-xl mb-4 tracking-tight">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-grey-700 hover:text-grey-900 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="text-grey-900 text-xl mb-4 tracking-tight">
                  Location
                </h3>
                <p className="text-grey-700">
                  Lagos, Nigeria
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionDiv>
    </section>
  );
}
