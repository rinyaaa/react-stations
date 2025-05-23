import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all')

        if (!res.ok) {
          console.error('error')
        }
        const resData = await res.json()

        setBreeds(Object.keys(resData.message))
      } catch {
        console.error('aaaa')
      }
    }
    fetchBreeds()
  }, [])

  const handleDisplayClick = async () => {
    if (!selectedBreed) {
      alert('犬種を選択してください。')
      return
    }

    setDogImages([]) // 以前の画像をクリア

    try {
      // 選択された犬種の画像を最大12件取得
      const response = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
      )
      const data = await response.json()

      if (data.status === 'success') {
        setDogImages(data.message)
      } else {
        console.error('画像の取得に失敗しました:', data.message)
        setDogImages([]) // エラー時は空にする
      }
    } catch (error) {
      console.error('画像の取得中にエラーが発生しました:', error)
      setDogImages([])
    }
  }

  const handleBreedChange = breed => {
    setSelectedBreed(breed)
    console.log('選択された犬種:', breed) // 選択された犬種をコンソールで確認
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onBreedChange={handleBreedChange}
        onDisplayClick={handleDisplayClick}
      />
      {dogImages.map((imageUrl, index) => (
        <div className="dogImage" key={index}>
          <img src={imageUrl} alt={`Dog ${index}`} />
          {``}
        </div>
      ))}
    </div>
  )
}

export default DogListContainer
