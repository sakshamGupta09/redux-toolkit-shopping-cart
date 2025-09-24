interface IProductPrice {
  original: number;
  discountedPrice: number;
  discountPercentage: number;
}

interface IProductRating {
  rating: number;
  ratedByCount: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  priceDetails: IProductPrice;
  ratingDetails: IProductRating;
  ratedByCount: number;
  images: string[];
  thumbnail: string;
}
