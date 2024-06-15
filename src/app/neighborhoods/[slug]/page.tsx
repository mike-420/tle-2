import GreenLine from "@/components/GreenLine";
import { Bricolage_Grotesque } from "next/font/google";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type BuildingInfo = {
  buildingName: string;
  streetAddress: string;
  zipCode: number;
  securedparking: boolean;
  pool: boolean;
  gym: boolean;
  buildingImage: "string";
};

export interface NeighborhoodInfo {
  neighborhood: string;
  buildings?: BuildingInfo[];
  youtubeVideos?: string;
  mapSmall?: string;
  mapLarge?: string;
  banner?: string;
}

async function fetchNeighborhoodData(): Promise<NeighborhoodInfo[]> {
  const filePath = path.join(process.cwd(), "src/neighborhood.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const data = await fetchNeighborhoodData();
  return data.map((neighborhood) => ({
    slug: neighborhood.neighborhood.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function NeighborhoodPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchNeighborhoodData();

  const neighborhood = data.find(
    (neighborhood) =>
      neighborhood.neighborhood.toLowerCase().replace(/\s+/g, "-") ===
      params.slug
  );

  if (!neighborhood) {
    notFound();
  }

  const otherNeighborhoods = data.filter(
    (item) =>
      item.neighborhood.toLowerCase().replace(/\s+/g, "-") !== params.slug
  );
  console.log(data);
  return (
    <div className="bg-white min-h-[150vh]">
      <div>
        <GreenLine />

        <img
          src={neighborhood.banner}
          alt=""
          className="object-cover max-h-[441px] w-full max-w-[2500px] mx-auto"
        />

        <GreenLine />
      </div>
      <div className="max-w-screen-1440px mx-auto px-4 sm:px-12 md:px-16 flex flex-col gap-4 w-full">
        <div className="py-6">
          <p
            className={`text-black ${Gretesque.className} font-light leading-[22px]`}
          >
            Home {">"} Downtown Neighborhoods {">"} {neighborhood.neighborhood}
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[185px] mt-16">
            <h1 className="text-lg text-gray-800 font-medium">
              Other Downtown Neighborhoods
            </h1>
            <div className="max-w-[148px] flex flex-col gap-1 divide-y divide-gray-300">
              {otherNeighborhoods.map((other, index) => (
                <Link
                  href={`/neighborhoods/${other.neighborhood
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={index}
                  className="text-gray-700 py-2 text-sm hover:text-gray-400 transition-colors"
                >
                  {other.neighborhood}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 shrink-0 flex-col gap-9">
            <h1 className="uppercase text-xl leading-9 text-gray-900">
              Lofts and Condos in {neighborhood.neighborhood}
            </h1>
            <div className="text-lg flex flex-col gap-10 pb-20  text-black">
              {neighborhood.buildings?.map((building, index) => {
                return (
                  <div className="grid grid-cols-3 min-h-[153px]" key={index}>
                    <div className="flex flex-col gap-1.5">
                      <span className="opacity-0">Building</span>
                      <img
                        src={building.buildingImage}
                        alt="Building"
                        className="rounded-l-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium text-black text-center">
                        Building
                      </span>
                      <div className="border-y flex flex-1 items-center justify-center">
                        <h1 className="font-bold text-lg text-center text-[#333]">
                          {building.buildingName}
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-medium text-black text-center">
                        Amenities
                      </span>
                      <div className="border flex flex-col gap-y-4 flex-1 items-center justify-center">
                        <div className="flex items-center gap-x-6">
                          {building.pool && <PoolIcon />}
                          {building.gym && <GymIcon />}
                        </div>
                        {building.securedparking && (
                          <h1 className="text-black">Secured Parking</h1>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-[255px] flex w-full mt-16">
            <img
              src={neighborhood.mapSmall}
              alt="Map"
              className="w-full object-cover rounded-lg max-h-[174px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const PoolIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8337 8.66659L7.31283 12.1874C7.64866 12.3174 7.91949 12.4799 8.14699 12.6099C8.54782 12.8591 8.78616 12.9999 9.39283 12.9999C9.99949 12.9999 10.2378 12.8591 10.6387 12.6099C11.137 12.3174 11.8087 11.9166 13.0112 11.9166C14.2137 11.9166 14.8853 12.3174 15.3728 12.6099C15.7737 12.8483 16.0228 12.9999 16.6187 12.9999C17.2145 12.9999 17.4637 12.8591 17.8645 12.6099C17.9945 12.5341 18.1462 12.4474 18.3087 12.3608L11.3537 5.41659C9.67449 3.73743 8.12533 3.23909 5.41699 3.24993V5.95826C7.38866 5.94743 8.54782 6.38076 9.75033 7.58326L10.8337 8.66659ZM23.8337 17.8749H23.812H23.8337ZM5.79616 16.7916C6.39199 16.7916 6.64116 16.9433 7.04199 17.1816C7.52949 17.4741 8.20116 17.8749 9.40366 17.8749C10.6062 17.8749 11.2778 17.4741 11.7653 17.1816C12.1662 16.9324 12.4045 16.7916 13.0112 16.7916C13.607 16.7916 13.8562 16.9433 14.257 17.1816C14.7445 17.4741 15.4162 17.8749 16.6187 17.8749C17.8212 17.8749 18.4928 17.4741 18.9803 17.1816C19.3812 16.9324 19.6195 16.7916 20.2262 16.7916C20.822 16.7916 21.0712 16.9433 21.472 17.1816C21.9595 17.4741 22.6203 17.8641 23.812 17.8749V15.7083C23.2162 15.7083 22.967 15.5566 22.5662 15.3183C22.0787 15.0258 21.407 14.6249 20.2045 14.6249C19.002 14.6249 18.3303 15.0258 17.8428 15.3183C17.442 15.5674 17.1928 15.7083 16.597 15.7083C16.0012 15.7083 15.752 15.5566 15.3512 15.3183C14.8637 15.0258 14.192 14.6249 12.9895 14.6249C11.787 14.6249 11.1153 15.0258 10.6278 15.3183C10.227 15.5674 9.98866 15.7083 9.38199 15.7083C8.78616 15.7083 8.53699 15.5566 8.13616 15.3183C7.64866 15.0258 6.97699 14.6249 5.77449 14.6249C4.57199 14.6249 3.90033 15.0258 3.41283 15.3183C3.01199 15.5674 2.77366 15.7083 2.16699 15.7083V17.8749C3.36949 17.8749 4.04116 17.4741 4.55033 17.1816C4.95116 16.9324 5.20033 16.7916 5.79616 16.7916ZM20.2262 19.4999C19.0237 19.4999 18.352 19.9008 17.8645 20.1933C17.4637 20.4424 17.2145 20.5833 16.6187 20.5833C16.0228 20.5833 15.7737 20.4316 15.3728 20.1933C14.8853 19.9008 14.2137 19.4999 13.0112 19.4999C11.8087 19.4999 11.137 19.9008 10.6387 20.1933C10.2378 20.4424 9.99949 20.5833 9.39283 20.5833C8.78616 20.5833 8.54782 20.4424 8.14699 20.1933C7.65949 19.9008 6.98783 19.4999 5.78533 19.4999C4.58283 19.4999 3.91116 19.9008 3.41283 20.1933C3.01199 20.4424 2.77366 20.5833 2.16699 20.5833V22.7499C3.36949 22.7499 4.04116 22.3491 4.53949 22.0566C4.94033 21.8074 5.18949 21.6666 5.78533 21.6666C6.38116 21.6666 6.63032 21.8074 7.03116 22.0566C7.51866 22.3491 8.19033 22.7499 9.39283 22.7499C10.5953 22.7499 11.267 22.3491 11.7653 22.0566C12.1662 21.8074 12.4045 21.6666 13.0112 21.6666C13.607 21.6666 13.8562 21.8183 14.257 22.0566C14.7445 22.3491 15.4162 22.7499 16.6187 22.7499C17.8212 22.7499 18.482 22.3491 18.9803 22.0566C19.3812 21.8074 19.6195 21.6666 20.2262 21.6666C20.822 21.6666 21.0712 21.8183 21.472 22.0566C21.9595 22.3491 22.6312 22.7499 23.8337 22.7499V20.5833C23.227 20.5833 22.9887 20.4424 22.5878 20.1933C22.1003 19.9008 21.4287 19.4999 20.2262 19.4999Z"
        fill="#555555"
      />
      <path
        d="M17.8753 8.66667C19.3711 8.66667 20.5837 7.4541 20.5837 5.95833C20.5837 4.46256 19.3711 3.25 17.8753 3.25C16.3796 3.25 15.167 4.46256 15.167 5.95833C15.167 7.4541 16.3796 8.66667 17.8753 8.66667Z"
        fill="#555555"
      />
    </svg>
  );
};

const GymIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z"
        fill="#555555"
      />
    </svg>
  );
};
