import { useState, useCallback, useMemo } from 'react';

// Components
import CustomButton from '../components/Buttons'
import DropdownSelect from '../components/DropdownSelect'

// Constant
import { CONTENT } from '../constant/constant'
const { label_provinsi, label_kabupaten, base_url, label_button } = CONTENT

// Custom Hooks
import useFetchProvince from '../hooks/useFetchProvince'
import useFetchKabKota from '../hooks/useFetchKabKota'


const ContentLayouts = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState<string | null>(null)
  const [selectedKabupaten, setSelectedKabupaten] = useState<string | null>(
    null,
  )
  const {
    data: provinsiData,
    loading: provinsiLoading,
    error: provinsiError,
  } = useFetchProvince<{ data: string[] }>(`${base_url}/imsakiyah/provinsi`)
  const { kabupatenData, kabupatenLoading, kabupatenError } = useFetchKabKota(
    `${base_url}/imsakiyah/kabkota`,
    selectedProvinsi,
  )

  const handleProvinsiChange = useCallback((value: string) => {
    setSelectedProvinsi(value)
    setSelectedKabupaten(null)
  }, [])

  const provinsiOptions = useMemo(
    () => provinsiData?.data || [],
    [provinsiData],
  )

  return (
    <div className="flex flex-col gap-4">
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
      <div className="fixed top-4 left-4 z-50">
        <CustomButton to="/" label={label_button} variant="white_dark" />
      </div>
    </div>
  )
}

export default ContentLayouts
