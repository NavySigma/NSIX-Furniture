export interface Layanan {
  id: number
  title: string
  description: string
  icon: string
}

export interface GaleriItem {
  id: number
  src: string
  title: string
  category: string
}

export interface Testimoni {
  id: number
  name: string
  location: string
  message: string
  rating: number
}

export interface KontakForm {
  name: string
  email: string
  phone: string
  message: string
}
