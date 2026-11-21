export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: number; icon?: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  avatarUrl: string;
  resumeUrl?: string;
  videoUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    dribbble: string;
    instagram?: string;
  };
}

export interface PortfolioData {
  profile: DeveloperProfile;
  aboutText: string[];
  skills: SkillCategory[];
  projects: Project[];
  testimonials: Testimonial[];
}
