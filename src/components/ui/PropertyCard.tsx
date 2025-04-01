import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Share2, MapPin } from "lucide-react";
import { Badge } from "../../components/ui/badge";

interface Owner {
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  sharePercentage: number;
}

interface PropertyCardProps {
  _id: string;
  name: string;
  location: string;
  description: string;
  totalShares: number;
  availableShares: number;
  pricePerShare: number;
  totalValue: number;
  owners: Owner[];
  images: string[];
  status: string;
  className?: string;
}

const PropertyCard = ({
  _id,
  name,
  location,
  totalShares,
  availableShares,
  pricePerShare,
  totalValue,
  owners,
  images,
  status,
  className = "",
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const shareProperty = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Share functionality placeholder
  };

  return (
    <Link to={`/property/${_id}`} className={`group block ${className}`}>
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Property Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={images[0] || "https://via.placeholder.com/300"}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={toggleFavorite}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
              aria-label="Add to favorites"
            >
              <Heart
                className={`h-4 w-4 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </button>
            <button
              onClick={shareProperty}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
              aria-label="Share property"
            >
              <Share2 className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Property Status Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge
              variant="secondary"
              className={`text-xs font-medium ${
                status === "active" ? "bg-green-500 text-white" : "bg-gray-400"
              }`}
            >
              {status.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Property Info */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <MapPin className="mr-1 h-3 w-3" />
                <span>{location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                ₹{totalValue.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Total Value</p>
            </div>
          </div>

          {/* Property Details */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-md bg-gray-50 px-2 py-1.5">
              <p className="text-xs font-medium text-gray-900">
                ₹{pricePerShare.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Price Per Share</p>
            </div>
            <div className="rounded-md bg-gray-50 px-2 py-1.5">
              <p className="text-xs font-medium text-gray-900">
                {totalShares}
              </p>
              <p className="text-xs text-gray-500">Total Shares</p>
            </div>
            <div className="rounded-md bg-gray-50 px-2 py-1.5">
              <p className="text-xs font-medium text-gray-900">
                {availableShares}
              </p>
              <p className="text-xs text-gray-500">Available Shares</p>
            </div>
          </div>

          {/* Owners Section */}
          {owners.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xs font-medium text-gray-500">Owners:</h4>
              <ul className="mt-1 text-xs text-gray-600 space-y-1">
                {owners.map((owner) => (
                  <li key={owner.userId._id}>
                    {owner.userId.name} ({owner.sharePercentage}%)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
