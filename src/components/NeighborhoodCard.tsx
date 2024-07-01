import { createSlug } from "@/helper";
import { NeighborhoodInfo } from "@/helper/api";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const NeighborhoodCard = ({ neighborhood, banner }: NeighborhoodInfo) => {
  const link = createSlug(neighborhood);

  return (
    <Link
      href={`/neighborhoods/${link}`}
      className={`h-[200px] w-full rounded-lg relative flex items-end justify-start overflow-hidden shadow-md ${SourceSans.className}`}
    >
      <Image
        src={banner}
        alt={neighborhood}
        width={500}
        height={250}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 from-10% flex items-end">
        <p className="text-white font-medium text-2xl max-sm:text-xl hover:underline p-4 max-sm:p-3 cursor-pointer">
          {neighborhood}
        </p>
      </div>
    </Link>
  );
};

export default NeighborhoodCard;
