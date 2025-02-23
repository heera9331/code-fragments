import CodeDisplay from "@/components/CodeDisplay";

export default function ComponentsPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="text-muted-foreground">
        Browse our collection of beautiful, reusable components built with React
        and Tailwind CSS.
      </p>

      <section>
        <h2></h2>
        <CodeDisplay />
      </section>

      <section>
        <h2 className="font-semibold text-2xl">Forms</h2>
      </section>

      <section>
        <h2 className="font-semibold text-2xl">Alerts</h2>
      </section>
    </div>
  );
}
