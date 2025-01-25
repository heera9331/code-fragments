import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeFragment } from '@/components/code-fragment';
import { ReadyTemplate } from '@/components/ready-template';
import { ReviewCard } from '@/components/review-card';
import { 
  Layout, 
  Palette, 
  Component, 
  FileCode,
  Star
} from 'lucide-react';

export default function Home() {
  const categories = [
    {
      title: 'HTML & CSS',
      icon: <Layout className="h-6 w-6" />,
      description: 'Beautiful layouts and styling patterns',
      color: 'bg-blue-500/10 text-blue-500',
      count: 24
    },
    {
      title: 'Tailwind Components',
      icon: <Palette className="h-6 w-6" />,
      description: 'Pre-built Tailwind CSS components',
      color: 'bg-purple-500/10 text-purple-500',
      count: 36
    },
    {
      title: 'React Components',
      icon: <Component className="h-6 w-6" />,
      description: 'Reusable React component patterns',
      color: 'bg-green-500/10 text-green-500',
      count: 18
    },
    {
      title: 'Code Templates',
      icon: <FileCode className="h-6 w-6" />,
      description: 'Ready-to-use code templates',
      color: 'bg-orange-500/10 text-orange-500',
      count: 12
    }
  ];

  const templates = [
    {
      title: "Admin Dashboard",
      description: "Complete admin panel with charts, tables, and authentication",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Dashboard",
      downloads: 2345
    },
    {
      title: "E-commerce Store",
      description: "Full-featured online store with cart and checkout",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "E-commerce",
      downloads: 1892
    },
    {
      title: "Blog Platform",
      description: "Modern blog template with MDX support",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Blog",
      downloads: 1567
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "Code Fragments has become my go-to resource for React components. The quality and consistency are outstanding!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "The ready-to-use templates have saved me countless hours of development time. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UI Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "Beautiful, well-documented components that are easy to customize. Exactly what I needed for my projects.",
      rating: 4
    }
  ];

  return (
    <div className="container py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Beautiful Code Fragments for Your Next Project
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A curated collection of beautiful, reusable code fragments for modern web development.
          Copy and paste into your projects.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <Card key={category.title} className="p-6">
            <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
              {category.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-muted-foreground mb-4">{category.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {category.count} fragments
              </span>
              <Button variant="ghost" size="sm">
                Explore →
              </Button>
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Fragments</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <CodeFragment
            title="Responsive Navigation Bar"
            description="A modern navigation bar with mobile menu and dark mode support"
            language="jsx"
            code={`export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Logo />
      <div className="hidden md:flex items-center gap-6">
        <NavLinks />
        <ThemeToggle />
      </div>
      <MobileMenu className="md:hidden" />
    </nav>
  );
}`}
          />
          
          <CodeFragment
            title="Grid Card Layout"
            description="Responsive grid layout with beautiful cards"
            language="jsx"
            code={`export function GridLayout({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="p-4">
          <CardContent {...item} />
        </Card>
      ))}
    </div>
  );
}`}
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Ready-to-Use Templates</h2>
          <Button variant="outline">Browse All Templates</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <ReadyTemplate key={template.title} {...template} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Developer Reviews</h2>
            <p className="text-muted-foreground">
              See what other developers are saying about Code Fragments
            </p>
          </div>
          <Button variant="outline">View All Reviews</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </section>
    </div>
  );
}