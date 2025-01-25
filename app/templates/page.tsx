import { ReadyTemplate } from '@/components/ready-template';

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

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Templates</h1>
      <p className="text-muted-foreground">
        Ready-to-use templates to kickstart your next project.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <ReadyTemplate key={template.title} {...template} />
        ))}
      </div>
    </div>
  );
}