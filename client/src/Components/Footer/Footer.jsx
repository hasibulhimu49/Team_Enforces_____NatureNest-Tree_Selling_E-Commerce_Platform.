import React from 'react';
import footerBanner from "/Assets/footer.png"
import img1 from '/Assets/icons/instagram.png'
import img2 from '/Assets/icons/linkedin.png'
import img3 from '/Assets/icons/pinterest.png'
import img4 from '/Assets/icons/tik-tok.png'

const Footer = () => {
    return (
        <div className='relative lg:mt-48 object-contain  lg:h-[540px] 
        md:h-[460px] bg-center bg-cover bg-no-repeat backdrop-blur-4xl'

            style={{
                backgroundImage: `url(${footerBanner})`,
            }}
        >

            <footer className="  grid  lg:grid-cols-3 md:grid-cols-5 grid-cols-2  footer backdrop-blur-xl   lg:max-w-7xl md:max-w-3xl  mx-auto rounded-b-xl   grid-rows-2 px-10 border-l-primary-4 rounded-3xl shadow-2xl drop-shadow-2xl lg:text-md md:text-base md:py-10 text-base py-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertise</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>
                <div className='lg:col-span-2 col-span-2 md:row-span-2 '>
                    <p className=" text-right text-4xl font-black font-serif bg-gradient-to-r from-emerald-700 via-yellow-500 to-green-600 bg-clip-text text-transparent">NatureNest</p>
                    <p>The Artist website builder offers a complete solution from enterprise <br />grade infrastructure and business features to advanced SEO and <br />marketing tools-enabling anyone to create and grow online.</p>
                    <p>©2006-2024 Sajid, Dev</p>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        {/* ///////////// */}
                        <a href=""><img className='h-6 w-6 items-center text-center' src={img3} alt="" /></a>
                        <a href=""><img className='h-6 w-6 items-center text-center' src={img1} alt="" /></a>
                        <a href=""><img className='h-6 w-6 items-center text-center' src={img2} alt="" /></a>
                        <a href=""><img className='h-6 w-6 items-center text-center' src={img4} alt="" /></a>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;