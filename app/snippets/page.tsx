import { CodeFragment } from '@/components/code-fragment';

export default function SnippetsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Code Snippets</h1>
      <p className="text-muted-foreground">
        A collection of useful code snippets for your projects.
      </p>
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
    </div>
  );
}