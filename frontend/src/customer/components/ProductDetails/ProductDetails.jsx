import { StarIcon } from "@heroicons/react/20/solid";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ProductReviewCard from "./ProductReviewCard";
import LinearProgress from "@mui/material/LinearProgress";
import {mens_kurta} from "../../../Data/mens_kurta.js"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard.jsx"

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className=" grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col-reverse items-center justify-end  ">
            {/* Thumbnail Images */}
            <div className="flex gap-3 mt-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-20 h-24 border rounded-md object-cover cursor-pointer hover:border-blue-500 transition"
                />
              ))}
            </div>

            {/* Main Image */}
            <div>
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full max-w-[400px] h-[500px] object-cover border rounded-lg"
              />
            </div>
          </div>
          {/* Product info */}
          <div className=" lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                brand name
              </h1>

              <h1 className="text-lg  lg:text-xl text-gray-900 opacity-60 pt-1 ">
                tittle here
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">price</p>
                <p className=" opacity-50 line-through">product price</p>
                <p className="text-green-600 font-semibold">50% of</p>
              </div>
              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="opacity-50 text-sm">45020 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3452 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <label
                          key={size.id}
                          aria-label={size.name}
                          className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                          <input
                            defaultValue={size.id}
                            defaultChecked={size === product.sizes[2]}
                            name="size"
                            type="radio"
                            disabled={!size.inStock}
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                          />
                          <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            {size.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <button className="bg-[#9155fd] text-white font-semibold px-4 py-2 rounded-md mt-2 cursor-pointer hover:bg-[#7e3ff2] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rating and reviews */}
        <section className="mx-20 ">
          <h1 className="font-semibold text-lg pb-4">Recent Review & Rating</h1>
          <div className=" bg-gray-100 p-4">
            <div className=" flex justify-around">
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item, index) => {
                    return <ProductReviewCard key={index} />;
                  })}
                </div>
              </Grid>

              <div>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating value={4} readOnly />
                  <p className="opacity-60 ">561356 Ratings</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex  items-center gap-10">
                    <p className="w-24 text-sm">Excellent</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
                      color="success"
                      sx={{
                        width: 220,
                        height: 8,
                        borderRadius: 5,
                      }}
                    />
                  </div>

                   <div className="flex justify-centre items-center gap-10">
                    <p className="w-24 text-sm">Excellent</p>
                    <LinearProgress
                      variant="determinate"
                      value={80}
                      color="success"
                      sx={{
                        width: 220,
                        height: 8,
                        borderRadius: 5,
                      }}
                    />
                  </div>

                   <div className="flex  items-center gap-10">
                    <p className="w-24 text-sm">Good</p>
                    <LinearProgress
                      variant="determinate"
                      value={25}
                      color="primary"
                      sx={{
                        width: 220,
                        height: 8,
                        borderRadius: 5,
                      }}
                    />
                  </div>

                   <div className="flex  items-center gap-10">
                    <p className="w-24 text-sm">Avarage</p>
                    <LinearProgress
                      variant="determinate"
                      value={20}
                      color="warning"
                      sx={{
                        width: 220,
                        height: 8,
                        borderRadius: 5,
                      }}
                    />
                  </div>

                   <div className="flex  items-center gap-10">
                    <p className="w-24 text-sm">Poor</p>
                    <LinearProgress
                      variant="determinate"
                      value={15}
                      color="error"
                      sx={{
                        width: 220,
                        height: 8,
                        borderRadius: 5,
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* similer Products */}
        <section className="pt-10 ">
          <h1 className="py-5 text-xl font-bold ml-15">Similer Products</h1>
          <div className=" grid grid-cols-5 gap-5 mx-5">
            {
              mens_kurta.map((item,index)=><HomeSectionCard item={item} key={index}/>)
            }

          </div>

        </section>
      </div>
    </div>
  );
}
