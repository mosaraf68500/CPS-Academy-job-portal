import Link from "next/link";
import about from "../../assets/about.png";
import mission from "../../assets/mission.jpg";
import vission from "../../assets/vision.jpg";
import learning from "../../assets/why-choose.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/qHN4RwJ/depositphotos-232776356-stock-video-paper-texture-animation-white-page.jpg')",
        }}
      >
        <div className="relative text-white text-center pt-16">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <div className="mt-4">
            <Link href="/" className="text-red-500 hover:underline mr-4">
              Home
            </Link>
            <Link href="/about" className="text-[#1EC28E] font-semibold hover:underline">
              About us
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div class=" bg-[#071136] text-white  flex items-center justify-center p-6">
          <div class="flex flex-col md:flex-row items-center ">
            <div class="md:w-1/2 p-6">
              <h2 class="text-yellow-300 text-3xl font-bold mb-4">
                About E-Learning & Earning Ltd
              </h2>
              <p class="text-gray-200 mb-4">
                E-Learning and Earning Ltd. has been the foremost information
                technology service provider since 2013. The training programs of
                e-Learning and Earning Ltd. offer a wide range of skills that
                are integral and necessary parts of everyday business. In our
                quest to address every organizational development need, we offer
                a gamut of training programs, which ranges from Executive
                Coaching and Leadership Training to basic Communication Skills.
              </p>
              <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Explore Our Courses
              </button>
            </div>
            <div class="md:w-1/2 p-6">
              <div class="bg-white text-gray-800  rounded-lg shadow-lg">
                <div className=" flex items-center justify-center">
                  <Image
                    src={about}
                    alt="About Image"
                    width="full"
                    height=""
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class=" bg-[#262731] text-white  flex items-center justify-center p-6">
          <div class="flex flex-col md:flex-row items-center ">
            <div class="md:w-1/2 p-6">
              <h2 class="text-yellow-300 text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p class="text-gray-200 mb-4">
                Our mission is to provide quality educational opportunities to
                develop and enable trainees to realize their potential by
                strengthening their knowledge, IT skills, and educational
                values.
              </p>
            </div>
            <div class="md:w-1/2 p-6">
              <div class="bg-white text-gray-800  rounded-lg shadow-lg">
                <div className=" flex items-center justify-center">
                  <Image
                    src={mission}
                    alt="About Image"
                    width="full"
                    height=""
                    className="object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class=" bg-[#1B1F33] text-white  flex items-center justify-center p-6">
          <div class="flex flex-col md:flex-row items-center ">
            <div class="md:w-1/2 p-6">
              <div class="bg-white text-gray-800  rounded-lg shadow-lg">
                <div className=" flex items-center justify-center">
                  <Image
                    src={vission}
                    alt="About Image"
                    width="full"
                    height=""
                    className="object-contain rounded"
                  />
                </div>
              </div>
            </div>
            <div class="md:w-1/2 p-6">
              <h2 class="text-yellow-300 text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p class="text-gray-200 mb-4">
                To be the best IT training provider, equipping individuals with
                cutting-edge skills for a tech-driven world. Our vision is to
                empower careers, foster innovation and bridge the digital
                divide, creating a more technologically proficient and inclusive
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class=" bg-[#262731] text-white  flex items-center justify-center p-6">
          <div class="flex flex-col md:flex-row items-center ">
            <div class="md:w-1/2 p-6">
              <h2 class="text-yellow-300 text-3xl font-bold mb-4">
                Why would you choose e-Learning and Earning Ltd.
              </h2>
              <p class="text-gray-200 mb-4">
                Going to e-Learning and Earning Ltd. is not the same as going
                back to school, we are different because we have a strong
                footprint on INFORMATION TECHNOLOGY. All our trainers have
                extensive professional as well as training experience,
                vendor-approved, up-to-date course content. Because of our
                extensive exposure, we are aware of the most recent developments
                in the industry that are applied in our training programs.
              </p>
            </div>
            <div class="md:w-1/2 p-6">
              <div class="bg-white text-gray-800  rounded-lg shadow-lg">
                <div className=" flex items-center justify-center">
                  <Image
                    src={learning}
                    alt="About Image"
                    width="full"
                    height=""
                    className="object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
