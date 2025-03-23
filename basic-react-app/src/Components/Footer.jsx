const Footer = () => {
    return (
      <footer className="bg-gradient-to-t from-[#acc5c8] to-blue-300 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold">FlexJapa</h3>
            <p className="text-sm mt-2">
              Nunc sed nibh gravida pellentesque quis at sem. Turpis magna fusce sagittis donec amet.
            </p>
            <div className="flex space-x-3 mt-4">
              <span className="cursor-pointer">🔵</span>
              <span className="cursor-pointer">🔷</span>
              <span className="cursor-pointer">⚪</span>
              <span className="cursor-pointer">📌</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Getting Started</li>
              <li>Help Center</li>
              <li>Server Status</li>
              <li>Report a Bug</li>
              <li>Chat Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">📧 Contact@Company.com</p>
            <p className="text-sm">📞 (316) 555-0116</p>
            <p className="text-sm">📍 6391 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
        <div className="text-center text-sm mt-6 border-t border-white pt-4">
          <p>Copyright © 2022 Johnson Ltd. Designed By Johnson Kayode Victor</p>
          <p>
            All Rights Reserved |{" "}
            <span className="underline cursor-pointer">Terms and Conditions</span> |{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  