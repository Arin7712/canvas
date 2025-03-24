import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Nunc ac arcu erat. In volutpat ornare massa non condimentum. Praesent lacinia interdum mi sit amet volutpat. Integer suscipit orci vel fringilla hendrerit.",
      name: "Sarah Chen",
      designation: "WEB DESIGN",
      src: "/t1.jpeg",
      description: "Let's design a website your customers will love.",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "BRANDING",
      description: "Let's give your brand a brilliant personality.",
      src: "/t3.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "MARKETING",
      description: "Let's create hype to acquire customers.",
      src: "/t2.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
