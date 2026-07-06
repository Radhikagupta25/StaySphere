import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetailsComponent from "../components/HotelDetailsComponent";

const HomePage = () => {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const hotelsPerPage = 50;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          "https://demohotelsapi.pythonanywhere.com/hotels/"
        );

        const data = await response.json();

        setHotels(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;

  const currentHotels = hotels.slice(
    indexOfFirstHotel,
    indexOfLastHotel
  );

  const totalPages = Math.ceil(
    hotels.length / hotelsPerPage
  );

  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10">

          <h1 className="text-4xl font-semibold text-[#433A34]">
            Browse Hotels
          </h1>

          <p className="mt-2 text-[#7A7067]">
            Showing {indexOfFirstHotel + 1} -
            {" "}
            {Math.min(indexOfLastHotel, hotels.length)}
            {" "}
            of {hotels.length} Hotels
          </p>

        </div>

        {loading ? (

          <div className="flex justify-center py-20">

            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E8DDD6] border-t-[#B8898E]" />

          </div>

        ) : (

          <div className="flex flex-col gap-8">

            {currentHotels.map((hotel) => (

              <HotelDetailsComponent
                key={hotel.id}
                hotel={hotel}
              />

            ))}

          </div>

        )}

        {!loading && (

          <div className="mt-12 flex items-center justify-center">
            <div className="hidden items-center gap-3 md:flex">

              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="rounded-full border border-[#E8E1D9] bg-white px-5 py-2 text-[#6B6259] transition hover:bg-[#B8898E] hover:text-white disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`h-10 w-10 rounded-full transition ${currentPage === index + 1
                    ? "bg-[#B8898E] text-white"
                    : "border border-[#E8E1D9] bg-white text-[#6B6259] hover:bg-[#A8B5A2] hover:text-white"
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="rounded-full border border-[#E8E1D9] bg-white px-5 py-2 text-[#6B6259] transition hover:bg-[#B8898E] hover:text-white disabled:opacity-40"
              >
                Next
              </button>

            </div>

            <div className="flex w-full items-center justify-between md:hidden">

              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="rounded-full border border-[#E8E1D9] bg-white px-4 py-2 text-sm text-[#6B6259] disabled:opacity-40"
              >
                Prev
              </button>

              <span className="text-sm font-medium text-[#6B6259]">
                {currentPage} / {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="rounded-full border border-[#E8E1D9] bg-white px-4 py-2 text-sm text-[#6B6259] disabled:opacity-40"
              >
                Next
              </button>

            </div>

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
};

export default HomePage;