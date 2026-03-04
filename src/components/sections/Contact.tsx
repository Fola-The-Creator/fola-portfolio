"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: SiGithub, url: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: SiX, url: "https://x.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 border-t border-grey-200">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-8 leading-tight tracking-tight max-w-3xl">
            Let&apos;s build something great together
          </h2>

          <p className="text-grey-700 text-lg max-w-2xl mb-16">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <RevealOnScroll delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-accent-500"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${
                    focusedInput === "name" || formData.name
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                  }`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-accent-500"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${
                    focusedInput === "email" || formData.email
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("subject")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-accent-500"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${
                    focusedInput === "subject" || formData.subject
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                  }`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-accent-500 resize-none"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${
                    focusedInput === "message" || formData.message
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                  }`}
                >
                  Your Message
                </label>
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  <span className="tracking-wide">Send Message</span>
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </MagneticButton>
            </form>
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll delay={0.3} className="lg:col-span-2">
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
                        className="w-12 h-12 border border-grey-100 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
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
                  href="mailto:adebanjosamuel2002@gmail.com"
                  className="text-grey-700 hover:text-accent-500 transition-colors"
                >
                  adebanjosamuel2002@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-grey-900 text-xl mb-4 tracking-tight">
                  Location
                </h3>
                <p className="text-grey-700">
                  Lagos, Nigeria
                  <br />
                  Remote Available
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionDiv>
    </section>
  );
}
