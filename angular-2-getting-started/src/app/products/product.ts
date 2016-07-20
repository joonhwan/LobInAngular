export interface IProduct {
  id: number;
  name: string;
  code: string;
  releaseDate: string;
  price: number;
  rating: number;
  description?: string;
  imageUrl?: string;
  optionalInfo?: string;
}