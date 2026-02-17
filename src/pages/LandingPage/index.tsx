import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { Section }from "@/components";
import { LandingPageImg } from "@/assets";

type HeroProps = {
  openLogin: () => void;
};

type Feature = {
  title: string;
  description: string;
  icon: string; 
};

const features: Feature[] = [
  {
    title: "Appointment Scheduling",
    description:
      "Easily schedule, manage, and track patient appointments with automatic conflict detection and reminders.",
    icon: LandingPageImg.pic1,
  },
  {
    title: "Patient Records",
    description:
      "Securely store and manage patient profiles, treatment history, dental records, and treatment notes.",
    icon: LandingPageImg.pic2,
  },
  {
    title: "Inventory Management",
    description:
      "Track materials and supplies, manage stock levels, and get low-stock alerts.",
    icon: LandingPageImg.pic3,
  },
  {
    title: "Billing & Payments",
    description:
      "Record and manage patient payments, billing details, and payment history with reporting tools.",
    icon: LandingPageImg.pic4,
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate detailed reports and analytics to monitor clinic performance and trends.",
    icon: LandingPageImg.pic5,
  },
  {
    title: "Appointment Reminders",
    description:
      "Automatically send reminders to patients via SMS or email to reduce missed appointments.",
    icon: LandingPageImg.pic6,
  },
  {
    title: "Data Security & Backup",
    description:
      "Protect patient and clinic data through secure storage and automatic backup systems.",
    icon: LandingPageImg.pic7,
  },
];

export function LandingPage({ openLogin }: HeroProps){
    const { loggedUser } = useAuth();
    const navigate = useNavigate();

    const handleGetStarted = () => {
    if (loggedUser) {
      switch (loggedUser.role) {
        case "Admin":
          navigate("/admin-dashboard");
          break;
        case "Staff":
          navigate("/staff-dashboard");
          break;
        case "Patient":
          navigate("/patient-dashboard");
          break;
        default:
          navigate("/");
      }
    } else {
      openLogin();
    }
  };

  return (
    <div>
    <section className="relative w-full bg-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-1 py-30 flex flex-col md:flex-row items-center">
        <div className="flex-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-inria text-gray-700">
            Dental Clinic Management System
          </h1>
          <div className="h-[2px] bg-gray-300 w-100 sm:w-32 md:w-167 mt-4 mx-[5px]"></div>
          <p className="mt-4 text-[20px] text-gray-500 font-inria">
            A centralized system for appointments, patient records,
            billing, and inventory.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button className="bg-green-400 font-poppins text-white px-6 py-2 rounded-lg shadow hover:bg-green-500 transition">
              Demo
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={LandingPageImg.Dental}
            alt="Dental"
            className="w-full md:w-[1000px] lg:w-[1200px] xl:w-[1400px] mx-auto"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f4f4f4"
            d="M0,64 C360,160 1080,0 1440,96 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </section>
    <Section className="bg-gray-100">
        <div className="flex items-center justify-center mb-8">
            <div className="h-[2px] bg-gray-300 flex-1 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-inria font-semibold text-gray-700">
                Features Overview
            </h2>
            <div className="h-[2px] bg-gray-300 flex-1 ml-4"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[1fr]">
            {features.map((feature, index) => {
            const isMain = index === 0;
            return (
                <div
                key={index}
                className={`
                    bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition
                    ${isMain ? "sm:col-span-1 sm:row-span-2 flex flex-col justify-center" : ""}
                `}
                >
                <img
                    src={feature.icon}
                    alt={feature.title}
                    className={`${isMain ? "w-25 h-25" : "w-14 h-14"} mx-auto mb-4`}
                />

                <h3
                    className={`font-semibold text-gray-700 mb-2 ${
                    isMain ? "text-xl" : "text-base"
                    }`}
                >
                    {feature.title}
                </h3>

                <p className={`${isMain ? "text-base" : "text-sm"} text-gray-500`}>
                    {feature.description}
                </p>
                </div>
            );
            })}
        </div>
    </Section>
    <Section className="relative bg-slate-200 overflow-hidden p-0">
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f4f4f4"
            d="M0,96 C360,0 1080,160 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="w-full md:w-1/2 text-left order-1 md:order-1">
          <div className="flex items-center justify-center mt-6 mb-8 mt-15">
            <div className="h-[2px] bg-gray-300 flex-1 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-inria font-semibold text-gray-700">
              Our Services
            </h2>
          </div>

          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 mb-4">
            Quality Dental Care We Provide
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
            faucibus ornare dolor. Quisque a turpis commodo, lacinia nulla 
            id, ultricies magna. Ut feugiat augue justo. Etiam id ultricies urna. 
            Donec turpis ante, ultricies porta sem vel, hendrerit suscipit lorem. 
            Mauris finibus venenatis lacinia. Vivamus maximus ullamcorper felis non 
            consequat. Nam sed vehicula magna. Nam nec nisl pellentesque turpis cursus mollis. 
            Aenean consectetur commodo ipsum, eu vestibulum elit. Integer tempor dapibus risus, 
            a gravida lorem consequat id.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Book Appointment →
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-2">
          <img
            src={LandingPageImg.Doctor}
            alt="Doctor"
            className="w-80 md:w-[600px] rounded-[100px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f4f4f4"
            d="M0,64 C360,160 1080,0 1440,96 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </Section>
    <Section className="bg-[#f4f4f4] py-16">
      <div className="flex items-center justify-center">
            <div className="h-[2px] bg-gray-300 flex-1 mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-inria font-semibold text-gray-700">
                About Our Clinic
            </h2>
            <div className="h-[2px] bg-gray-300 flex-1 ml-4"></div>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={LandingPageImg.Clinic}
            alt="About Our Clinic"
            className="w-full md:w-[400px] lg:w-[480px] rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
        
          <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
            Caring for Your Smile with Excellence and Compassion
          </h3>
          <p className="text-gray-600 mb-4 text-justify">
            Our dental clinic is dedicated to providing high-quality, safe, and patient-centered oral healthcare services. We aim to promote healthier smiles by combining professional expertise, modern dental technology, and personalized treatment plans tailored to each patient's needs.
          </p>
          <p className="text-gray-600 text-justify">
            We believe that good oral health plays a vital role in overall well-being. Our team is committed to delivering reliable dental care in a comfortable and welcoming environment where patients feel confident and cared for.
          </p>
        </div>

      </div>
    </Section>
    </div>
  );
}