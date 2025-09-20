import { FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "@/assests/logo.png"


const links = ["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"];

export default function Footer() {
    return (
        <footer className="bg-blue-200 text-gray-700">
            <div className="w-full px-6 md:px-20 py-12">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-[30%]">
                        <div className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                alt="logo-img"
                                className="h-12 w-12"
                            />
                            <h2 className="text-lg font-bold">
                                E-Comm
                            </h2>
                        </div>
                        <p className="mt-2 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry standard dummy text
                            ever. Since the 1500s, when an unknown printer.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div className="w-full md:w-[30%]">
                        <h3 className="text-lg font-semibold">
                            Follow Us
                        </h3>
                        <p className="mt-1 text-sm">
                            Since the 1500s, when an unknown printer took a galley of type and
                            scrambled.
                        </p>
                        <div className="flex items-center gap-4 mt-2 mb-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <FaFacebook size={30}/>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                <FaTwitter size={30}/>
                            </a>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full md:w-[30%]">
                        <h3 className="text-lg font-semibold">
                            Contact Us
                        </h3>
                        <p className="mt-1 text-sm">
                            E-Comm, 4578 <br />
                            Marmora Road, <br />
                            Glasgow D04 89GR
                        </p>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
                    <div>
                        <h3 className="font-semibold">
                            Infomation
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            {
                                links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Service
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            {
                                links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            My Account
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            {
                                links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Our Offers
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            {
                                links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© 2025 Ecommerce theme by www.bisenbaev.com</p>
                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                        <img
                            src="/product-img/western.jpg"
                            alt="Western Union"
                            className="h-10 rounded-sm"
                        />
                        <img
                            src="/product-img/mastercard.webp"
                            alt="Mastercard"
                            className="h-10 rounded-sm"
                        />
                        <img
                            src="/product-img/paypal.jpg"
                            alt="Paypal"
                            className="h-10 rounded-sm"
                        />
                        <img
                            src="/product-img/visa.webp"
                            alt="Visa"
                            className="h-10 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
