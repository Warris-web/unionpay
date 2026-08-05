// import { footer } from '../../data/content'
// import logo from "../../assets/images/logo.png";
// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <footer className="bgDB1E33 text-white footerbg">
//       <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1fr_1fr_1.4fr]">
//         <div>
//           <a href='' className="relative rounded-md overflow-hidden flex shrink-0 mb-6 footrerimg">
//            <img src={logo} alt="UnionPay Logo" className='width65linkimg' className="w100px" />
//           </a>
//           <p className="font-display text-xl font-semibold leading-tight whitespace-pre-line footerlogotxt">
//             {footer.tagline}
//           </p>
//         </div>

//         <div className="flex flex-col gap-3">
//           {footer.columns.map((c) => (
//             <a key={c.title} href={c.href} className="text-white/90 hover:text-white/60 transition-colors w-fit footerlink">
//               {c.title}
//             </a>
//           ))}
//         </div>

//         <div className="flex-col gap-6 md:items-end">
//           <p className="italic text-white/90 leading-relaxed max-w-sm footertxtunion">
//             {footer.promise}
//           </p>

//           <div className="flex gap-6 text-sm text-white/85 pt3point6em">
//             {footer.legal.map((l, index) => (
//               <Link to="/privacy-policy"
//                 key={l}
//                 href="#"
//                 className={`hover:text-white transition-colors footerprivacylink ${
//                   index === 1 ? "mlauto" : ""
//                 }`}
//               >
//                 {l}
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </footer>
//   )
// }





import { footer } from "../../data/content";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bgDB1E33 text-white footerbg">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1fr_1fr_1.4fr]">
        {/* Logo & Tagline */}
        <div>
          <Link
            to="/"
            className="relative rounded-md overflow-hidden flex shrink-0 mb-6 footrerimg"
          >
            <img
              src={logo}
              alt="UnionPay Logo"
              className="width65linkimg w100px"
            />
          </Link>

          <p className="font-display text-xl font-semibold leading-tight whitespace-pre-line footerlogotxt">
            {footer.tagline}
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col gap-3">
          {footer.columns.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="text-white/90 hover:text-white/60 transition-colors w-fit footerlink"
            >
              {c.title}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:items-end">
          <p className="italic text-white/90 leading-relaxed max-w-sm footertxtunion">
            {footer.promise}
          </p>
          {/* Privacy & Terms */}
          <div className="flex gap-6 text-sm text-white/85 pt3point6em">
            <a
              href=" https://www.unionpayintl.com/en/privacyNotice/"
              className="hover:text-white transition-colors footerprivacylink"
            >
              Privacy Policy
            </a>

            <a
              href="https://www.unionpayintl.com/en/infome/"
              className="hover:text-white transition-colors footerprivacylink"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/UnionPayAfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1E33] hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/unionpay_africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1E33] hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  );
}