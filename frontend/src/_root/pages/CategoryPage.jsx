import { useState, useEffect } from "react";
import "../../styles/List.scss";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setListings } from "../../redux/state";
import Loader from "../../components/Loader";
import ListingCard from "../../components/ListingCard";
import Footer from "../../components/Footer"


const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams()

  const dispatch = useDispatch()
  const listings = useSelector((state) => state.app.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch(
          `/api/listings?category=${category}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(() => {
    getFeedListings();
    //eslint-disable-next-line
  }, [category]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
        <h1 className="title-list">{category} listings</h1>
        <div className="listings">
            {listings?.map(
            ({
                id,
                creator,
                listing_photo_paths,
                city,
                province,
                country,
                category,
                type,
                price,
                booking=false
            }) => (
                <ListingCard
                key={id}
                listingId={id}
                creator={creator}
                listingPhotoPaths={listing_photo_paths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
                />
            )
            )}
        </div>
        <Footer />
    </>
  );
};

export default CategoryPage;