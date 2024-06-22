import { Button } from '@nextui-org/button';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300 px-6 md:px-32 pt-4 pb-8 md:py-16 gap-0 md:gap-12 flex flex-col">
      <section className="flex flex-col md:flex-row gap-12 py-6">
        {/* footer left */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/2 text-[#FFFFFFB2] font-extralight text-sm text-center md:text-left">
          <img src="footer-logo.svg" alt="Footer Logo" width={50} />
          <p>
            Arayı açmayalım! <br /> beije’deki yeni ürün ve gelişmeleri sana
            haber verelim & aylık e-gazetemiz döngü’ye abone ol!
          </p>
          <form action="" className="gap-4 flex w-full  flex-col md:flex-row">
            <input
              type="text"
              placeholder="e-mail adresin"
              className="p-2 rounded-md md:w-2/4 bg-transparent border-1 border-white"
            />
            <Button radius="full">Gönder</Button>
          </form>
          <p className="text-xs">
            Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
            beije'den haber almayı onaylıyorum.
          </p>
        </div>
        {/* footer right */}
        <div className="flex flex-col md:flex-row gap-12 w-1/2">
          <div className="flex  md:flex-row  gap-x-12 text-center md:text-left">
            <FooterColumn
              title="Ürünler"
              items={[
                'beije ped',
                'beije günlük ped',
                'beije tampon',
                'beije store',
              ]}
            />
            <FooterColumn
              title="Bağlantılar"
              items={['Blog', 'Sıkça Sorulan Sorular', 'Biz Kimiz', 'Quiz']}
            />
          </div>
          <FooterSocial />
        </div>
      </section>
      <div className="flex flex-col text-sm text-gray-300 py-0 md:py-12">
        <hr className="border-gray-500 my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#FFFFFFB2]  font-extralight">
          <div>2024 beije. Tum haklari saklidir.</div>
          <ul className="flex flex-col md:flex-row gap-5 md:gap-10 text-center pt-4 md:pt-0">
            <li>KVKK</li>
            <li>KVKK Başvuru Formu</li>
            <li>Üyelik Sözleşmesi</li>
            <li>Gizlilik Politikası </li>
            <li>Çerez Politikası</li>
            <li>Test Sonuçları</li>
          </ul>
          <div className="pt-8 md:pt-0">EN | TR</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 text-sm">
      {items.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

function FooterSocial() {
  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, name: 'Facebook' },
    { icon: <FaInstagram className="w-5 h-5" />, name: 'Instagram' },
    { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <FaLinkedin className="w-5 h-5" />, name: 'LinkedIn' },
    { icon: <FaSpotify className="w-5 h-5" />, name: 'Spotify' },
  ];

  return (
    <div className="flex flex-row md:flex-col gap-12 md:gap-6 text-sm font-light">
      {socialLinks.map((link, index) => (
        <span className="flex gap-2 items-center" key={index}>
          {link.icon}
          <p className="hidden md:block">{link.name}</p>
        </span>
      ))}
    </div>
  );
}
