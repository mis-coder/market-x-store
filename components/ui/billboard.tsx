import { Billboard } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <Image
          className="h-full w-full object-cover"
          src={data?.imageUrl}
          alt="billboard-image"
          width={500}
          height={500}
        />
        <div className="absolute top-0 right-0 h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-black text-white opacity-70">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
