import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export function ReviewCard({
  name,
  role,
  avatar,
  content,
  rating
}: ReviewCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-primary text-primary' : 'text-muted'
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
    </Card>
  );
}