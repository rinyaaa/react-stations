import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const showDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'

    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.log('jsonファイルが取れません')
      }
      const dogData = await res.json()
      setDogUrl(dogData.message) // これでステートが更新され、DogImageコンポーネントが再描画されます
    } catch {
      console.log('error')
    }
  }

  return (
    <>
      <div className="dogContent">
        <span className="left">犬の画像を表示するサイトです</span>
        <span className="right">
          <DogImage imageUrl={dogUrl} />
        </span>
      </div>
      <button className='kousin' onClick={showDog}>更新</button>
    </>
  )
}

export default Description
