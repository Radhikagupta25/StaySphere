import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HotelPage = () => {

    const { id } = useParams();

    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        fetch(`https://demohotelsapi.pythonanywhere.com/hotels/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHotel(data.data);
            })
    }, [id]);

    if (!hotel) {
        return (
            <>
                <Navbar />

                <div className="flex min-h-[70vh] items-center justify-center bg-[#F8F6F2]">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E7DDD4] border-t-[#B8898E]" />
                </div>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-[#F8F6F2] py-12">

                <div className="mx-auto max-w-7xl px-6">

                    <Link to="/" className="mb-10 inline-flex items-center gap-2 text-[#6D635A] transition hover:text-[#B8898E]">
                        <ArrowLeft size={18} />
                        Back to Hotels
                    </Link>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

                        <img
                            src={hotel.thumbnail}
                            alt={hotel.name}
                            className="h-62.5 w-full object-cover sm:h-87.5 md:h-112.5 lg:h-130"
                        />

                        <div className="p-5 sm:p-7 lg:p-10">

                            <div className="flex flex-col gap-10 xl:flex-row xl:justify-between">

                                <div className="max-w-3xl">

                                    <div className="mb-4 flex items-center gap-5">

                                        <span className="flex items-center gap-2 text-[#6D635A]">
                                            <MapPin size={18} />
                                            {hotel.location}
                                        </span>

                                        <span className="flex items-center gap-2 text-[#6D635A]">
                                            <Star fill="#F4C542" color="#F4C542" size={18} />
                                            {hotel.rating}
                                        </span>

                                    </div>

                                    <h1 className="text-3xl font-semibold text-[#433A34] sm:text-4xl lg:text-5xl">
                                        {hotel.name}
                                    </h1>

                                    <p className="mt-8 leading-8 text-[#72685F]">
                                        {hotel.description}
                                    </p>

                                </div>

                                <div className="w-full rounded-3xl border border-[#ECE5DE] bg-[#FBFAF8] p-6 sm:p-8 xl:w-[320px]">

                                    <p className="text-sm text-[#8A8178]">
                                        Starting From
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-[#B8898E] sm:text-4xl lg:text-5xl">
                                        ₹ {hotel.price}
                                    </h2>

                                    <p className="mt-1 text-[#8A8178]">
                                        per night
                                    </p>

                                    <button className="mt-8 w-full rounded-full bg-[#B8898E] py-4 font-medium text-white transition hover:bg-[#A77783]">
                                        Book Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-16">

                        <h2 className="mb-8 text-2xl font-semibold text-[#433A34] sm:text-3xl">
                            Photo Gallery
                        </h2>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {hotel.photos.map((photo, index) => (
                                <div key={index} className="overflow-hidden rounded-2xl">
                                    <img
                                        src={photo}
                                        alt=""
                                        className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-64 lg:h-72"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section >
            <Footer />
        </>
    );
};

export default HotelPage;