export const DogImage = props => {
  const { imageUrl } = props
  console.log(imageUrl)
  return (
    <>
      <img src={imageUrl} />
    </>
  )
}

export default DogImage
