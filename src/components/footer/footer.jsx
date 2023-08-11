function Footer() {
  return (
    <>
      <div className="bg-opacity-60 bg-black cursor-default bottom-0 pt-5">
        <div className="h-full flex flex-col items-center gap-y-3 md:items-start md:flex-row justify-evenly p-12">
          <div className="alamat w-1/4 gapy-1">
            <h3 className="text-white w-fit text-lg">
              KUNJUNGI KAMI
              <hr />
              <br />
            </h3>
            <div className="text-white relative">
              <p>Benua Puhun</p>
              <p>Kec. Muara Kaman</p>
              <p>Kutai Kartanegara, Kalimantan Timur</p>
              <p>Senin-Jumat 08:30-15:00 WITA</p>
              <p>Sabtu, Minggu, dan Hari Libur Nasional Tutup</p>
            </div>
          </div>

          <div className="maps hidden md:flex w-1/4 flex-col gap-y-1 text-lg">
            <h3 className="text-white w-fit">
              GOOGLE MAPS
              <hr />
              <br />
            </h3>

            <div className="relative text-right h-[200px] w-[300px] mt-1">
              <div className="overflow-hidden bg-none h-[200px] w-[300px] rounded-md">
                <iframe
                  width="300"
                  height="200"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.382001012265!2d116.7334900849204!3d-0.27044209776319755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6400b1561e059%3A0xdbd72251678428f9!2sBenua%20Puhun%2C%20Kec.%20Muara%20Kaman%2C%20Kabupaten%20Kutai%20Kartanegara%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1689744157285!5m2!1sid!2sid"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <a href="https://www.whatismyip-address.com" className=""></a>
                <br />

                <a href="https://www.embedgooglemap.net">map embed iframe</a>
              </div>
            </div>
          </div>

          <div className="contact w-1/4 flex flex-col gap-y-1 text-lg">
            <h3 className="text-white w-fit">
              CONTACT US
              <hr />
              <br />
            </h3>
            <div className="text-white">
              <div className="flex flex-row items-center">
                <i className="fa fa-phone mr-2"></i>
                {/* <p>0541 - 4121777</p> */}
                <p>+62 822-5100-5154</p>
              </div>
              <div className="flex flex-row items-center">
                <i className="fa fa-envelope mr-2"></i>
                <p>rozy_as_developer@gmail.com</p>
              </div>
              <div className="flex flex-row items-center">
                <i className="fa fa-globe mr-2"></i>
                <p>https://github.com/mattismyname3011</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-800 flex flex-row justify-between items-center">
          <div className="py-3 px-5 text-white cursor-default text-sm">
            © Copyright 2023, Desa Benua Puhun. All Rights Reserved
          </div>
          <div className="text-white flex flex-row py-3 px-5 gap-x-5">
            <a href="https://www.youtube.com/@KKN49_BenuaPuhun" target="_blank">
              <i className="fab fa-youtube-square hover:text-black  fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/kkn49_benuapuhun/"
              target="_blank"
            >
              <i className="fab fa-instagram-square hover:text-black  fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
