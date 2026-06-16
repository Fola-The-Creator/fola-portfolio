"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";
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
    { icon: SiGithub, url: "https://github.com/Fola-The-Creator", label: "GitHub" },
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
            Let&apos;s build something great together
          </h2>

          <p className="text-grey-700 text-lg max-w-2xl mb-16">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <RevealOnScroll delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {(["name", "email", "subject"] as const).map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput(field)}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-grey-900"
                    required
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${focusedInput === field || formData[field]
                      ? "text-xs text-grey-700 -top-4"
                      : "text-base text-grey-700 top-4"
                      }`}
                  >
                    {field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Subject"}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-grey-100 text-grey-900 py-4 outline-none transition-all duration-300 focus:border-grey-900 resize-none"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none tracking-wide ${focusedInput === "message" || formData.message
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
                  className="group inline-flex items-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 rounded-full hover:bg-grey-700 transition-all duration-300"
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

          <RevealOnScroll delay={0.3} direction="left" className="lg:col-span-2">
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
                        className="w-11 h-11 border border-grey-200 rounded-full flex items-center justify-center hover:border-grey-900 hover:text-grey-900 transition-all duration-300"
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
                  href="mailto:adebanjosamuel2002@gmail.com"
                  className="text-grey-700 hover:text-grey-900 transition-colors"
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
