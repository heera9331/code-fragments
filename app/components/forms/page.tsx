import Head from "next/head";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Form1 } from "./_components/form1";
import Form2 from "./_components/form2";
import Form3 from "./_components/form3";

function FormPage() {
  return (
    <>
      <Head>
        <title>Forms - Code Fragments</title>
        <meta
          name="description"
          content="Explore our forms in HTML & CSS, React, and Tailwind."
        />
      </Head>
      <div className="container w-full">
        <h1 className="text-2xl font-bold">Forms</h1>
        <header className="my-4">
          <Tabs defaultValue="html-and-css">
            <TabsList className="mb-2">
              <TabsTrigger value="html-and-css">HTML & CSS</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
            </TabsList>
            <Separator />
            <TabsContent value="html-and-css">
              <h2>HTML & CSS</h2>
              <div className="grid grid-cols-3 mt-2 gap-4">
                <Card
                  className="col-span-1 overflow-auto max-h-[450px] p-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Form1 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto max-h-[450px] p-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Form2 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto max-h-[450px] p-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Form3 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto max-h-[450px] p-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Form3 />
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="react">
              <p>React</p>
            </TabsContent>
            <TabsContent value="tailwind">
              <p>Tailwind</p>
            </TabsContent>
          </Tabs>
        </header>
      </div>
    </>
  );
}

export default FormPage;
