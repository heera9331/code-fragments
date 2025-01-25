import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';

interface ReadyTemplateProps {
  title: string;
  description: string;
  image: string;
  category: string;
  downloads: number;
}

export function ReadyTemplate({
  title,
  description,
  image,
  category,
  downloads
}: ReadyTemplateProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
            {category}
          </span>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Download className="h-4 w-4" />
            {downloads.toLocaleString()}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-3">
          <Button className="flex-1">Preview</Button>
          <Button variant="outline" className="flex-1">
            Download
          </Button>
        </div>
      </div>
    </Card>
  );
}