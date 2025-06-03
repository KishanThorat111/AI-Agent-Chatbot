export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

export interface NavLink {
  id: string;
  title: string;
  url: string;
}