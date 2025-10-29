import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
const projectData = [
  {
    id: 1,
    image: card1,
    category: "Web Development",
    title: "CarPoint — Car Dealership Website",
    description:
      "Developed a responsive vehicle showcase and management platform for a modern car dealership. Features include vehicle listings, filter-based search, user dashboard, and wishlist system. Focused on smooth performance and clean UI for easy browsing. Skills: PHP · MySQL · JavaScript · HTML & CSS",
    link: "#contact",
  },
  {
    id: 2,
    image: card2,
    category: "E-commerce",
    title: "ShopLux — E-commerce Website",
    description:
      "Built a fully functional e-commerce platform with a modern interface and secure backend. Includes product catalog, shopping cart, wishlist, admin panel, and order management. Designed for an intuitive shopping experience and fast checkout. Skills: PHP · MySQL · Bootstrap · JavaScript",
    link: "#contact",
  },
  {
    id: 3,
    image: card3,
    category: "Web Development",
    title: "MaxFit Gym – Fitness & Membership Portal",
    description:
      "Created a dynamic gym website to showcase fitness programs, trainers, and membership plans. Features include a membership form, trainer profiles, and a responsive design for all devices. Focused on visual appeal and strong brand presentation. Skills: PHP · JavaScript · HTML & CSS · MySQL",
    link: "#contact",
  },
  {
    id: 4,
    image: card4,
    category: "Web Development",
    title: "PetPoint – Pet Care & Services Platform",
    description:
      "Developed a responsive web platform for pet owners and service providers. Users can explore pet products, veterinary services, and adoption options. Focused on clean UI, smooth navigation, and mobile-first optimization. Skills: PHP · JavaScript · MySQL · HTML & CSS",
    link: "#contact",
  },
  {
    id: 5,
    image: card5,
    category: "E-commerce",
    title: "WestKart – E-commerce Marketplace",
    description:
      "Developed an online marketplace using WordPress and WooCommerce. Implemented product listings, shopping cart, wishlist, and secure checkout flow. Focused on responsive design and easy user experience across devices. Skills: WordPress · WooCommerce · Responsive Web Design",
    link: "#contact",
  },
  {
    id: 6,
    image: card6,
    category: "Food Delivery",
    title: "PetPuja – Online Food Delivery Platform",
    description:
      "Developed a responsive food delivery website for exploring cuisines and ordering meals online. Users can browse categories, search dishes, and place quick orders. Focused on vibrant design, simple navigation, and a seamless ordering experience. Skills: PHP · MySQL · JavaScript · HTML & CSS · Bootstrap",
    link: "#contact",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
