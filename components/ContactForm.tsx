"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website Developing",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    // Simulate successful submission
    console.log("Form Submitted:", formData);
    alert("TRANSMISSION RECEIVED. WE WILL RESPOND SHORTLY.");
    setFormData({
      name: "",
      email: "",
      projectType: "Website Developing",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-3 group">
        <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 group-focus-within:text-lime transition-colors">
          [FULL NAME]
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-transparent border-b border-border py-4 text-3xl font-bebas text-foreground focus:outline-none focus:border-lime transition-all uppercase placeholder:text-foreground/10"
          placeholder="YOUR DESIGNATION"
        />
      </div>

      <div className="flex flex-col gap-3 group">
        <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 group-focus-within:text-lime transition-colors">
          [EMAIL ADDRESS]
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-transparent border-b border-border py-4 text-3xl font-bebas text-foreground focus:outline-none focus:border-lime transition-all uppercase placeholder:text-foreground/10"
          placeholder="DISRUPTION@EMAIL.COM"
        />
      </div>

      <div className="flex flex-col gap-3 group">
        <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 group-focus-within:text-lime transition-colors">
          [SELECT VECTOR]
        </label>
        <div className="relative">
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full bg-transparent border-b border-border py-4 text-2xl font-bebas text-foreground focus:outline-none focus:border-lime transition-all uppercase appearance-none"
          >
            <option className="bg-background">Website Developing</option>
            <option className="bg-background">App Developing</option>
            <option className="bg-background">Billing Software</option>
            <option className="bg-background">ERP & CRM</option>
            <option className="bg-background">Other</option>
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 group-focus-within:text-lime animate-pulse">
            ↓
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 group">
        <label className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 group-focus-within:text-lime transition-colors">
          [MISSION DESCRIPTION]
        </label>
        <textarea
          rows={3}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-transparent border-b border-border py-4 text-lg font-dm text-foreground/70 focus:outline-none focus:border-lime transition-all placeholder:text-foreground/10 resize-none leading-relaxed"
          placeholder="TELL US ABOUT THE PROJECT SCOPE..."
        />
      </div>

      <button
        type="submit"
        className="group relative flex items-center justify-between bg-lime px-8 py-5 rounded-full font-bebas text-2xl text-black uppercase tracking-widest transition-all duration-300 hover:scale-[0.98] mt-6"
      >
        <span className="relative z-10">DISPATCH MESSAGE</span>
        <span className="group-hover:translate-x-2 transition-transform duration-300 relative z-10">→</span>
        <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 opacity-20 rounded-full transition-transform duration-500 blur-xl" />
      </button>
    </form>
  );
}
