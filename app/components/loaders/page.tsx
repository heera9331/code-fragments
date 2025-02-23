import Head from "next/head";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Loader1 from "./_components/loader1";
import Loader2 from "./_components/loader2";
import Loader3 from "./_components/loader3";
import Loader4 from "./_components/loader4";
import Loader5 from "./_components/loader5";

function FormPage() {
  return (
    <>
      <Head>
        <title>Loaders - Code Fragments</title>
        <meta
          name="description"
          content="Explore our forms in HTML & CSS, React, and Tailwind."
        />
      </Head>
      <div className="container w-full">
        <h1 className="text-2xl font-bold">Loaders</h1>
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
              <div className="grid grid-cols-4 mt-2 gap-4">
                <Card
                  className="col-span-1 overflow-auto min-h-[250px] p-4 flex justify-center items-center"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Loader1 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto min-h-[250px] p-4 flex justify-center items-center"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Loader2 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto min-h-[250px] p-4 flex justify-center items-center bg-gray-300"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Loader3 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto min-h-[250px] p-4 flex justify-center items-center bg-gray-300"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Loader4 />
                </Card>
                <Card
                  className="col-span-1 overflow-auto min-h-[250px] p-4 flex justify-center items-center"
                  style={{ scrollbarWidth: "none" }}
                >
                  <Loader5 />
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
