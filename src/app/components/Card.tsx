export default function Card() {
  return (
    <div className="flex flex-col p-8 gap-8 rounded-xl bg-white items-start w-[466px]">
      <span className="text-2xl font-medium">Özel Paketin</span>
      <div className="flex p-3 rounded-lg bg-[#FEFEFE] w-full gap-2 shadow-lg">
        <img src="repeat.svg" alt="" />2 ayda 1 gönderim
      </div>

      <img src="packet.webp" alt="" />

      <div className="flex flex-col gap-2 text-sm rounded-lg bg-[#FEFEFE] shadow-lg w-full items-start p-6">
        <span>Ped Paketleri</span>
        <span>(product)</span>
        <button>paketten cikar</button>
      </div>
      <button className="bg-[#343431] w-full p-3 rounded-full text-white">
        Sepete Ekle (price)
      </button>
    </div>
  );
}
