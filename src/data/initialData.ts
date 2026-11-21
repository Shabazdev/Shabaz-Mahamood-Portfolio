import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Morshed Al Nuasd",
    title: "Full Stack Developer",
    headline: "From Sketch to Scale – I Build the Web You Imagine",
    bio: "Hi, Morshed Al Nuasd, a developer who loves crafting modern web applications with scalable backends to deliver meaningful digital products.",
    location: "Available Worldwide",
    email: "example@gmail.com",
    yearsOfExperience: 3,
    projectsCompleted: 10,
    avatarUrl: "/src/assets/images/regenerated_image_1795301473290.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      dribbble: "https://dribbble.com",
    }
  },
  aboutText: [
    "Hi, Morshed Al Nuasd, a passionate Full Stack Developer who loves crafting modern web applications that are both beautiful on the surface and powerful under the hood.",
    "With expertise in React, Next.js, Node.js, Express, and PostgreSQL, I bring intuitive design and efficient functionality. My experience with authentication systems, payment gateways, and cloud deployment makes me confident in delivering production-ready solutions for real-world clients.",
    "Whether it's a Startup MVP or a scalable enterprise application, I focus on writing clean, maintainable code and creating experiences that users love."
  ],
  skills: [
    {
      title: "Frontend",
      description: "Building responsive, accessible, and high-performance user interfaces.",
      iconName: "Monitor",
      skills: [
        { name: "JavaScript", level: 98 },
        { name: "TypeScript", level: 92 },
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "HTML, CSS, TailwindCSS", level: 95 }
      ]
    },
    {
      title: "Databases",
      description: "Managing structured & unstructured data with reliability.",
      iconName: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "Prisma", level: 88 }
      ]
    },
    {
      title: "Backend",
      description: "Creating APIs and server-side logic that scale.",
      iconName: "Server",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 }
      ]
    },
    {
      title: "Authentication",
      description: "Secure login & role-based access made simple.",
      iconName: "Shield",
      skills: [
        { name: "Firebase", level: 95 },
        { name: "JWT", level: 92 }
      ]
    },
    {
      title: "Payments",
      description: "Seamless checkout and payment integration.",
      iconName: "CreditCard",
      skills: [
        { name: "Stripe", level: 95 },
        { name: "PayPal", level: 90 }
      ]
    }
  ],
  projects: [
    {
      id: "smartshop-1",
      title: "SmartShop (E-commerce Platform)",
      category: "Full-Stack Web App",
      description: "React, Node.js, Express, MongoDB, Stripe.",
      longDescription: "SmartShop is a robust e-commerce ecosystem built with React, Node.js, Express, and MongoDB, featuring secure Stripe checkout and comprehensive state management.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "smartshop-2",
      title: "SmartShop (E-commerce Platform)",
      category: "UI/UX & Hardware App",
      description: "React, Node.js, Express, MongoDB, Stripe.",
      longDescription: "An ergonomic mouse and peripheral brand website featuring 3D product visualization and seamless checkout.",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "smartshop-3",
      title: "SmartShop (E-commerce Platform)",
      category: "Travel & Coastal Platform",
      description: "React, Node.js, Express, MongoDB, Stripe.",
      longDescription: "A breathtaking coastal travel destination discovery platform with immersive imagery and booking integrations.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "smartshop-4",
      title: "SmartShop (E-commerce Platform)",
      category: "Creative Product Web",
      description: "React, Node.js, Express, MongoDB, Stripe.",
      longDescription: "An innovative pet product startup landing page featuring whimsical illustration and lightning-fast checkout.",
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "Amanda R",
      role: "Office Manager",
      company: "Blackwell Corp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      content: "Booking was simple and transparent, I posted the job in under 5 minutes and got responses almost instantly. Our office has never been cleaner.",
      rating: 5
    }
  ]
};
