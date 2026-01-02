
export interface Video {
  id: string;
  title: string;
  topic: string;
  date: string;
  duration: string;
  thumbnail: string;
  category?: string;
}

export interface Tool {
  name: string;
  category: string;
  pricing: string;
  description: string;
  image: string;
  tag?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  colorClass: string;
}

export interface AcademyModule {
  id: string;
  title: string;
  description: string;
  level: string;
  icon: string;
}
