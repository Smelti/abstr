export interface Book {
    readonly id: number
    readonly title: string
    readonly authors: string
    readonly favorite: boolean
    readonly descrtiption?: string
    readonly fileCover?: string
    readonly fileName?: string
}