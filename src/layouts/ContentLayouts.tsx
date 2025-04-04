import { useState, useCallback, useMemo } from 'react'

// Components
import CustomButton from '../components/Buttons'
import DropdownSelect from '../components/DropdownSelect'
import PrayerCalendar from '../components/PrayerCalendar'

// Constant
import { CONTENT } from '../constant/constant'
const { label_provinsi, label_kabupaten, base_url, label_button } = CONTENT

// Custom Hooks
import useFetchProvince from '../hooks/useFetchProvince'
import useFetchKabKota from '../hooks/useFetchKabKota'
import useFetchImsakiyah from '../hooks/useFetchImsakiyah'

const ContentLayouts = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState<string | null>(null)
  const [selectedKabupaten, setSelectedKabupaten] = useState<string | null>(
    null,
  )

  const {
    data: provinsiData,
    loading: provinsiLoading,
    error: provinsiError,
  } = useFetchProvince(`${base_url}/imsakiyah/provinsi`)
  const {
    data: kabupatenData,
    loading: kabupatenLoading,
    error: kabupatenError,
  } = useFetchKabKota(`${base_url}/imsakiyah/kabkota`, selectedProvinsi || '')
  const {
    data: imsakiyahData,
    loading: imsakiyahLoading,
    error: imsakiyahError,
  } = useFetchImsakiyah(
    `${base_url}/imsakiyah`,
    selectedProvinsi || '',
    selectedKabupaten || '',
  )

  const handleProvinsiChange = useCallback((value: string) => {
    setSelectedProvinsi(value)
    setSelectedKabupaten(null)
  }, [])

  const provinsiOptions = useMemo(() => provinsiData || [], [provinsiData])

  return (
    <div className="flex flex-col items-center gap-4 mx-auto max-w-4xl w-full p-4">
      <DropdownSelect
        id="provinsi"
        label={label_provinsi}
        data={provinsiOptions}
        selectedValue={selectedProvinsi}
        setSelectedValue={handleProvinsiChange}
        isLoading={provinsiLoading}
        error={provinsiError}
      />
      <DropdownSelect
        id="kabupaten"
        label={label_kabupaten}
        data={kabupatenData}
        selectedValue={selectedKabupaten}
        setSelectedValue={setSelectedKabupaten}
        isLoading={kabupatenLoading}
        error={kabupatenError}
        disable={!selectedProvinsi}
        selectedProvinsi={selectedProvinsi}
      />
      {imsakiyahLoading && <p>Loading...</p>}
      {imsakiyahError && <p className="text-red-500">{imsakiyahError}</p>}
      {imsakiyahData && (
        <div className="w-full flex justify-center">
          <PrayerCalendar
            imsakiyah={imsakiyahData.imsakiyah}
            provinsi={imsakiyahData.provinsi}
            kabkota={imsakiyahData.kabkota}
            hijriah={imsakiyahData.hijriah}
            masehi={imsakiyahData.masehi}
          />
        </div>
      )}
      <div className="fixed top-4 left-4 z-50">
        <CustomButton to="/" label={label_button} variant="white_dark" />
      </div>
    </div>
  )
}

export default ContentLayouts
