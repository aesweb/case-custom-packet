import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300 px-32 py-16 gap-12 flex flex-col">
      <section className="flex gap-12 py-6">
        {/* footer left */}
        <div className="flex flex-col gap-6 w-1/2">
          <img src="footer-logo.svg" alt="Footer Logo" width={50} />
          <div className="text-sm">
            Arayı açmayalım! <br /> beije’deki yeni ürün ve gelişmeleri sana
            haber verelim & aylık e-gazetemiz döngü’ye abone ol!
          </div>
          <form action="" className="gap-4 flex">
            <input
              type="text"
              placeholder="e-mail adresin"
              className="p-2 rounded-md w-2/4"
            />
            <button className="bg-gray-300 text-gray-800 rounded-full p-2">
              Gönder
            </button>
          </form>
          <div className="text-xs">
            Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
            beije'den haber almayı onaylıyorum.
          </div>
        </div>
        {/* footer right */}
        <div className="flex gap-12 w-1/2">
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
            items={['blog', 'sıkça sorulan sorular', 'biz kimiz', 'quiz']}
          />
          <FooterSocial />
        </div>
      </section>
      <div className="flex flex-col text-sm text-gray-300 py-12">
        <hr className="border-gray-500 my-4" />
        <div className="flex justify-between items-center">
          <div>2024 beije. Tum haklari saklidir.</div>
          <ul className="flex gap-10">
            <li>KVKK</li>
            <li>KVKK Başvuru Formu</li>
            <li>Üyelik Sözleşmesi</li>
            <li>Gizlilik Politikası </li>
            <li>Çerez Politikası</li>
            <li>Test Sonuçları</li>
          </ul>
          <div>EN | TR</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

function FooterSocial() {
  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaTwitter />, name: 'Twitter' },
    { icon: <FaLinkedin />, name: 'LinkedIn' },
    { icon: <FaSpotify />, name: 'Spotify' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <span className="flex gap-2 items-center" key={index}>
          {link.icon}
          <p>{link.name}</p>
        </span>
      ))}
    </div>
  );
}
