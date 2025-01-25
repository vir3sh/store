export const products = [
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 69999,
    quantity: 5,
    image: "https://m.media-amazon.com/images/I/81vqHyDCSCL._AC_UY218_.jpg",
    rating: 4.7,
    sizes: ["128GB", "256GB"],
    bestseller: true,
    userReviews: [
      {
        username: "TechGuru",
        review:
          "Amazing display and performance. Battery life could be better.",
        rating: 4,
        date: "2024-11-15",
      },
      {
        username: "MobileFanatic",
        review: "Best Android phone I've used so far!",
        rating: 5,
        date: "2024-12-20",
      },
    ],
    description:
      "The Samsung Galaxy S21 offers a dynamic AMOLED display, powerful Exynos 2100 processor, and a versatile triple-camera setup.",
    brand: "Samsung",
    category: "Mobile",
    subCategory: "Smartphones",
  },
  {
    id: 3,
    title: "Apple iPhone 13",
    price: 79999,
    quantity: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sXxJy3VgIY8HC7lWCdTblL218dEh4MIOYw&s",
    rating: 4.8,
    sizes: ["128GB", "256GB", "512GB"],
    bestseller: true,
    userReviews: [
      {
        username: "AppleLover",
        review: "Smooth performance and excellent camera quality.",
        rating: 5,
        date: "2024-10-05",
      },
      {
        username: "BudgetBuyer",
        review: "A bit pricey, but worth every penny.",
        rating: 4,
        date: "2024-11-22",
      },
    ],
    description:
      "The iPhone 13 features a Super Retina XDR display, A15 Bionic chip, and an improved dual-camera system for stunning photos and videos.",
    brand: "Apple",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 4,
    title: "OnePlus 9 Pro",
    price: 64999,
    quantity: 4,
    image: "https://m.media-amazon.com/images/I/61H5BvUlNeS.jpg",
    rating: 4.6,
    sizes: ["128GB", "256GB"],
    bestseller: false,
    userReviews: [
      {
        username: "GadgetGeek",
        review:
          "Fast charging and fluid display. Camera could use some improvements.",
        rating: 4,
        date: "2024-09-30",
      },
      {
        username: "Speedster",
        review: "Blazing fast performance with a sleek design.",
        rating: 5,
        date: "2024-12-10",
      },
    ],
    description:
      "The OnePlus 9 Pro comes with a Fluid AMOLED display, Snapdragon 888 processor, and a Hasselblad-tuned quad-camera system.",
    brand: "OnePlus",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 5,
    title: "Google Pixel 6",
    price: 59999,
    quantity: 6,
    image:
      "https://i5.walmartimages.com/seo/Google-Pixel-6-128GB-GB7N6-Factory-Unlocked-8GB-RAM-Smartphone-Sorta-Seafoam_04252aa4-00b0-4844-b803-3eaeb0fc7fc3.be79d2ebfaa3a0278b612c0bb2de2056.jpeg",
    rating: 4.5,
    sizes: ["128GB", "256GB"],
    bestseller: false,
    userReviews: [
      {
        username: "PhotoEnthusiast",
        review: "Outstanding camera performance, especially in low light.",
        rating: 5,
        date: "2024-11-01",
      },
      {
        username: "AndroidFan",
        review: "Pure Android experience with timely updates.",
        rating: 4,
        date: "2024-12-15",
      },
    ],
    description:
      "The Google Pixel 6 offers a clean Android experience, Google's custom Tensor chip, and an advanced camera system with computational photography.",
    brand: "Google",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 6,
    title: "Xiaomi Mi 11 Ultra",
    price: 69999,
    quantity: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRLiUfpDhBeNtkrZPj7-dWbLrxoJp3-4dxA&s",
    rating: 4.7,
    sizes: ["256GB", "512GB"],
    bestseller: true,
    userReviews: [
      {
        username: "ValueSeeker",
        review: "Premium features at a competitive price.",
        rating: 5,
        date: "2024-10-20",
      },
      {
        username: "TechSavvy",
        review: "Impressive battery life and display quality.",
        rating: 4,
        date: "2024-11-25",
      },
    ],
    description:
      "The Xiaomi Mi 11 Ultra boasts a 120Hz AMOLED display, Snapdragon 888 processor, and a versatile triple-camera setup with a large sensor.",
    brand: "Xiaomi",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },

  {
    id: 8,
    title: "Realme GT Neo 3",
    price: 36999,
    quantity: 4,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/2/9/c/-original-imaghzfgbgyafbgq.jpeg?q=90&crop=false",
    rating: 4.4,
    sizes: ["128GB", "256GB"],
    bestseller: true,
    userReviews: [
      {
        username: "RealmeFan",
        review: "Excellent performance and fast charging.",
        rating: 5,
        date: "2024-11-10",
      },
      {
        username: "GadgetHunter",
        review: "Decent camera but amazing speed.",
        rating: 4,
        date: "2024-12-18",
      },
    ],
    description:
      "The Realme GT Neo 3 offers cutting-edge performance with MediaTek Dimensity 8100 chipset and 150W fast charging support.",
    brand: "Realme",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 9,
    title: "Oppo Find X5 Pro",
    price: 89999,
    quantity: 2,
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/navigation/find-x5-pro-black-navigation.png",
    rating: 4.6,
    sizes: ["256GB", "512GB"],
    bestseller: false,
    userReviews: [
      {
        username: "DesignLover",
        review: "Sleek design and stunning display.",
        rating: 5,
        date: "2024-11-25",
      },
      {
        username: "NightPhotographer",
        review: "Great night photography capabilities.",
        rating: 4,
        date: "2024-12-12",
      },
    ],
    description:
      "The Oppo Find X5 Pro features a premium ceramic build, Snapdragon 8 Gen 1, and a Hasselblad-tuned camera for incredible photography.",
    brand: "Oppo",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 10,
    title: "Vivo X80 Pro",
    price: 74999,
    quantity: 5,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l3929ow0/mobile/k/g/q/-original-imageewzvy6d9cgb.jpeg?q=90&crop=false",
    rating: 4.5,
    sizes: ["128GB", "256GB"],
    bestseller: false,
    userReviews: [
      {
        username: "CameraFan",
        review: "Superb camera performance and battery life.",
        rating: 5,
        date: "2024-12-05",
      },
      {
        username: "PerformanceLover",
        review: "Smooth user experience with good software optimization.",
        rating: 4,
        date: "2024-12-15",
      },
    ],
    description:
      "The Vivo X80 Pro offers a ZEISS-tuned camera system, Snapdragon 8 Gen 1, and a vibrant AMOLED display for an excellent viewing experience.",
    brand: "Vivo",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 11,
    title: "Motorola Edge 30 Ultra",
    price: 59999,
    quantity: 3,
    image:
      "https://www.jiomart.com/images/product/original/rvoouhhi0h/motorola-edge-50-fusion-5g-marshmallow-blue-8gb-ram-128gb-storage-product-images-orvoouhhi0h-p609067654-3-202405242018.png?im=Resize=(420,420)",
    rating: 4.3,
    sizes: ["128GB", "256GB"],
    bestseller: false,
    userReviews: [
      {
        username: "MotoFan",
        review: "Flagship features at an affordable price.",
        rating: 4,
        date: "2024-10-30",
      },
      {
        username: "DisplayExpert",
        review: "Edge display is a game changer.",
        rating: 5,
        date: "2024-11-20",
      },
    ],
    description:
      "The Motorola Edge 30 Ultra boasts a 200MP camera, Snapdragon 8+ Gen 1, and a beautiful curved-edge display.",
    brand: "Motorola",
    category: "Mobile Phone",
    subCategory: "Smartphones",
  },
  {
    id: 12,
    title: "Asus ROG Phone 6",
    price: 79999,
    quantity: 2,
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/rog-phone-6-ram-12-gb-storage-256-gb-storm-white-272357024-mnjro9z4.jpg",
    rating: 4.7,
    sizes: ["128GB", "256GB"],
    bestseller: true,
    userReviews: [
      {
        username: "GamingPro",
        review: "Ultimate gaming experience with great cooling.",
        rating: 5,
        date: "2024-11-02",
      },
      {
        username: "Techie",
        review: "Superb battery life and customizable controls.",
        rating: 4,
        date: "2024-12-20",
      },
    ],
    description:
      "The Asus ROG Phone 6 is a gaming powerhouse with Snapdragon 8+ Gen 1, 165Hz AMOLED display, and customizable RGB lighting.",
    brand: "Asus",
    category: "Mobile Phone",
    subCategory: "Gaming Smartphones",
  },
];
