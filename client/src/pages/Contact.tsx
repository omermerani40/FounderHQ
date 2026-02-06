import { useState } from "react";
import { Check, X } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Email validation regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Form is valid
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have questions about our services? Want to discuss your project? We'd love to hear from you. Reach out today and let's explore how we can help your business succeed.
          </p>
        </section>

        {/* Content Section */}
        <section id="general" className="py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              {/* Address */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">📍</span> Address
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Level 12, 570 George Street<br />
                  Sydney NSW 2000<br />
                  Australia
                </p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">📧</span> Email
                </h3>
                <p className="text-muted-foreground">
                  <a href="mailto:hello@founderhq.com.au" className="hover:text-primary transition font-medium">
                    hello@founderhq.com.au
                  </a>
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <a href="mailto:support@founderhq.com.au" className="hover:text-primary transition">
                    support@founderhq.com.au
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">📱</span> Phone
                </h3>
                <p className="text-muted-foreground">
                  <a href="tel:+61292001234" className="hover:text-primary transition font-medium">
                    +61 (2) 9200 1234
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Hours
                </h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <X className="w-4 h-4" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : formData.email && isValidEmail(formData.email)
                          ? "border-green-500 focus:ring-green-500"
                          : "border-input"
                      }`}
                      placeholder="john@example.com"
                    />
                    {formData.email && !errors.email && isValidEmail(formData.email) && (
                      <Check className="absolute right-4 top-3.5 w-5 h-5 text-green-500" />
                    )}
                    {errors.email && (
                      <X className="absolute right-4 top-3.5 w-5 h-5 text-red-500" />
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <X className="w-4 h-4" /> {errors.email}
                    </p>
                  )}
                  {formData.email && !errors.email && isValidEmail(formData.email) && (
                    <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Valid email format
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-input"
                    }`}
                    placeholder="Tell us more about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <X className="w-4 h-4" /> {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
                  disabled={submitted}
                >
                  {submitted ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Response Time CTA */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Quick Response Guaranteed</h3>
            <p className="text-muted-foreground mb-4">
              We typically respond to inquiries within 24 business hours. For urgent matters, please call us directly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
