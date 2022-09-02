interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

export function MangaCard({ id, image, title, description, price, rating }: MangaCardProps) {
  return (
    <h1>Foda</h1>
  )
}