import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HotelDetailsComponent = ({ hotel }) => {
  return (
    <div className="flex min-h-85flex-col overflow-hidden rounded-3xl border border-[#E8E1D9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">

      <div className="flex flex-col md:flex-row">

        <div className="h-64 shrink-0 overflow-hidden md:h-85 md:w-90">
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-7">

          <div>

            <div className="mb-3 flex items-center gap-2 text-[#8D847B]">
              <MapPin size={18} />
              <span className="text-sm">
                {hotel.location}
              </span>
            </div>

            <h2 className="text-3xl font-semibold text-[#4D443C]">
              {hotel.name}
            </h2>

            <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-[#746A61]">
              {hotel.description}
            </p>

          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm text-[#9A9087]">
                Starting from
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#B8898E]">
                ₹ {hotel.price}
                <span className="ml-1 text-base font-normal text-[#8D847B]">
                  / night
                </span>
              </h3>

            </div>

            <Link
              to={`/hotel/${hotel.id}`}
              className="flex items-center gap-2 rounded-full bg-[#B8898E] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#A67681]"
            >
              View Details
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HotelDetailsComponent;