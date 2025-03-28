import React from 'react'

const HeroLayouts: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center">
      {/* Wrapper untuk efek lebih smooth */}
      <div className="relative inline-block">
        <h1 className="text-xl lg:text-5xl font-extrabold text-transparent bg-clip-text animate-gradient-text">
          Jadwal Imsakiyah & Sholat
          <br /> Ramadhan 2025
        </h1>
      </div>

      {/* Subjudul */}
      <h2 className="text-md lg:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Waktu Ibadah yang Akurat untuk Umat Muslim
      </h2>

      {/* Deskripsi */}
      <div className="text-gray-600 dark:text-gray-300">
        <p className="text-xs lg:text-xl leading-relaxed">
          Temukan jadwal{' '}
          <span className="text-pink-500 font-semibold dark:text-fuchsia-400">
            Imsak, Sholat & Berbuka
          </span>{' '}
          dengan mudah & akurat.
        </p>

        <p className="text-xs lg:text-xl leading-relaxed">
          Jadikan Ramadhan kali ini lebih bermakna!
        </p>
      </div>

      {/* Tombol Aksi (Hanya tombol yang punya margin atas) */}
      <div className="flex gap-4 justify-center mt-4">
        <button className="w-36 h-10 text-xs lg:w-42 lg:h-12 lg:text-base text-neutral-100 bg-zinc-900 dark:text-zinc-900 dark:bg-neutral-100 font-semibold rounded-lg shadow-md cursor-pointer transition-colors duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-zinc-800 dark:hover:bg-neutral-200">
          Kunjungi Github
        </button>

        <button className="w-32 h-10 text-sm lg:w-40 lg:h-12 lg:text-base text-neutral-100 bg-[#d946ef] dark:text-neutral-100 dark:bg-[#db2777] font-semibold rounded-lg shadow-md cursor-pointer transition-colors duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-[#c026d3] dark:hover:bg-[#be185d]">
          Lihat Jadwal
        </button>
      </div>
    </div>
  )
}

export default HeroLayouts
