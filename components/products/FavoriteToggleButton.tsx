import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size="icon" variant="outline" className="p-2">
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
