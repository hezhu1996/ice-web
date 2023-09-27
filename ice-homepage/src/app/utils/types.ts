export interface ImageProps {
    id: number
    height: string
    width: string
    public_id: string
    format: string
    blurDataUrl: string
    imageSrc: string
}

export interface SharedModalProps {
    index: number
    images?: ImageProps[]
    currentPhoto?: ImageProps
    changePhotoId: (newVal: number) => void
    closeModal: () => void
    navigation: boolean
    direction?: number
  }
  