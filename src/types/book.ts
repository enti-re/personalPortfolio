export interface Book {
  id: string
  title: string
  author: string
  year: string
  categories: string[]
  notes?: string
  link?: string
  rating?: number
  status?: 'read' | 'currently-reading' | 'to-read'
}
