// Components
import CustomButton from '../components/Buttons'

// Types
import type React from 'react'

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
      <h2 className="text-md lg:text-2xl font-semibold text-zinc-700 dark:text-zinc-200">
        Waktu Ibadah yang Akurat untuk Umat Muslim
      </h2>

      {/* Deskripsi */}
      <div className="text-zinc-600 dark:text-zinc-300">
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
        <CustomButton
          href="https://github.com/rendy-ptr/Imsakiyah-Schedule"
          label="Kunjungi Github"
          variant="white_dark"
        />
        <CustomButton
          to="/content"
          label="Lihat Jadwal"
          variant="purple_pink"
        />
      </div>
    </div>
  )
}

export default HeroLayouts
