import { useRouter } from "next/router";
import offersData from "../../data/offers.json";

export default function OfferPage() {
  const router = useRouter();
  const { path } = router.query;

  // Znajdź ofertę o pasującym polu "path"
  const offer = offersData.categories
    .flatMap((category) => category.offers)
    .find((offer) => offer.path === path);

  if (!offer) {
    return <div>Oferta nie została znaleziona.</div>;
  }

  const {
    hotelName,
    stars,
    startDate,
    basePrice,
    promoPrice,
    lastMinute,
    mealCategory,
  } = offer;

  return (
    <div>
      <h1>{hotelName}</h1>
      <p>Stars: {stars}</p>
      <p>Start Date: {startDate}</p>
      <p>Base Price: {basePrice}</p>
      <p>Promo Price: {promoPrice ? promoPrice : "Brak promocji"}</p>
      <p>Last Minute: {lastMinute ? "Tak" : "Nie"}</p>
      <p>Meal Category: {mealCategory}</p>
    </div>
  );
}
