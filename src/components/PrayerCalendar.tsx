import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImsakiyahItem, ImsakiyahData } from '../types/customTypes'

const PrayerCalendar: React.FC<ImsakiyahData> = ({
  imsakiyah,
  provinsi,
  kabkota,
  hijriah,
  masehi,
}) => {
  const [selectedDate, setSelectedDate] = useState<ImsakiyahItem | null>(null)

  return (
    <div className="w-full max-w-3xl mx-auto bg-transparent p-6 rounded-xl shadow-xl">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-zinc-700 dark:text-white">
          Jadwal Sholat - {kabkota}, {provinsi}
        </h2>
        <p className="text-zinc-700 dark:text-gray-400">
          {hijriah} / {masehi}
        </p>
      </div>

      {/* Kalender */}
      <div className="grid grid-cols-6 lg:grid-cols-10 gap-3 lg:gap-4 mt-4 justify-items-center">
        {imsakiyah.map((day) => (
          <button
            key={day.tanggal}
            className="w-10 h-10 lg:w-14 lg:h-14
             flex items-center justify-center
             text-xs sm:text-sm md:text-base
             font-semibold text-zinc-700
             bg-neutral-100 rounded-lg shadow-md
             transition-all duration-300
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-fuchsia-500
             hover:text-neutral-100 cursor-pointer"
            onClick={() => setSelectedDate(day)}
          >
            {day.tanggal}
          </button>
        ))}
      </div>

      {/* Modal untuk jadwal sholat */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/30 p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-700 dark:bg-neutral-100 p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-1000 ease-in-out"
            >
              <h2 className="text-md font-bold text-center text-neutral-100 dark:text-zinc-700 mb-4">
                Jadwal Sholat - Tanggal {selectedDate.tanggal} {hijriah} Hijriah
              </h2>
              <div className="space-y-2 text-center font-bold text-neutral-100 dark:text-zinc-700">
                <p>
                  <strong>Imsak:</strong> {selectedDate.imsak}
                </p>
                <p>
                  <strong>Subuh:</strong> {selectedDate.subuh}
                </p>
                <p>
                  <strong>Terbit:</strong> {selectedDate.terbit}
                </p>
                <p>
                  <strong>Dhuha:</strong> {selectedDate.dhuha}
                </p>
                <p>
                  <strong>Dzuhur:</strong> {selectedDate.dzuhur}
                </p>
                <p>
                  <strong>Ashar:</strong> {selectedDate.ashar}
                </p>
                <p>
                  <strong>Maghrib:</strong> {selectedDate.maghrib}
                </p>
                <p>
                  <strong>Isya:</strong> {selectedDate.isya}
                </p>
              </div>
              <button
                className="mt-4 w-full p-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedDate(null)}
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PrayerCalendar
