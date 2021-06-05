/**
 * AUTO GENERATED
 */
export interface PreloadData {
    timestamp: string
    illust: Illusts
    user: Users
}
export interface Urls {
    mini: string
    thumb: string
    small: string
    regular: string
    original: string
}
export interface Translation {
    en?: string
    cn?:string
}
export interface Tag {
    tag: string
    locked: boolean
    deletable: boolean
    userId: string
    translation?: Translation
    userName: string
}
export interface Tags {
    authorId: string
    isLocked: boolean
    tags: Array<Tag>
    writable: boolean
}
export interface TitleCaptionTranslation {
    workTitle: string
    workCaption: string
}
export interface IllustLite {
    id: string
    title: string
    illustType: number
    xRestrict: number
    restrict: number
    sl: number
    url: string
    description: string
    tags: Array<string>
    userId: string
    userName: string
    width: number
    height: number
    pageCount: number
    isBookmarkable: boolean
    bookmarkData: null
    alt: string
    titleCaptionTranslation: TitleCaptionTranslation
    createDate: string
    updateDate: string
    isUnlisted: boolean
    isMasked: boolean
    profileImageUrl?: string

}
export type UserIllusts = Record<number,IllustLite>

export interface FanboxPromotion {
    userName: string
    userImageUrl: string
    contentUrl: string
    description: string
    imageUrl: string
    imageUrlMobile: string
    hasAdultContent: boolean
}
export interface Responsive {
    url: string
}
export interface ZoneConfig {
    responsive: Responsive
    rectangle: Responsive
    "500x500": Responsive
    header: Responsive
    footer: Responsive
    expandedFooter: Responsive
    logo: Responsive
    relatedworks: Responsive
}
export interface AlternateLanguages {
    ja: string
    en: string
}
export interface Ogp {
    description: string
    image: string
    title: string
    type: string
}
export interface Twitter {
    description: string
    image: string
    title: string
    card: string
}
export interface Meta {
    title: string
    description: string
    canonical: string
    alternateLanguages: AlternateLanguages
    descriptionHeader: string
    ogp: Ogp
    twitter: Twitter
}
export interface ExtraData {
    meta: Meta
}
export interface Current {
    zh: string
}
export interface Breadcrumbs {
    successor: Array<undefined>
    current: Current
}
export interface NextWork {
    id: string
    title: string
}
export interface ZengoWorkData {
    nextWork: NextWork
    prevWork: NextWork
}
export interface NoLoginData {
    breadcrumbs: Breadcrumbs
    zengoIdWorks: Array<IllustLite>
    zengoWorkData: ZengoWorkData
}
export interface IllustFull {
    illustId: string
    illustTitle: string
    illustComment: string
    id: string
    title: string
    description: string
    illustType: number
    createDate: string
    uploadDate: string
    restrict: number
    xRestrict: number
    sl: number
    urls: Urls
    tags: Tags
    alt: string
    storableTags: Array<string>
    userId: string
    userName: string
    userAccount: string
    userIllusts: UserIllusts
    likeData: boolean
    width: number
    height: number
    pageCount: number
    bookmarkCount: number
    likeCount: number
    commentCount: number
    responseCount: number
    viewCount: number
    isHowto: boolean
    isOriginal: boolean
    imageResponseOutData: Array<undefined>
    imageResponseData: Array<undefined>
    imageResponseCount: number
    pollData: null
    seriesNavData: null
    descriptionBoothId: null
    descriptionYoutubeId: null
    comicPromotion: null
    fanboxPromotion: FanboxPromotion
    contestBanners: Array<undefined>
    isBookmarkable: boolean
    bookmarkData: null
    contestData: null
    zoneConfig: ZoneConfig
    extraData: ExtraData
    titleCaptionTranslation: TitleCaptionTranslation
    isUnlisted: boolean
    request: null
    noLoginData: NoLoginData
}
export type Illusts = Record<number,IllustFull>
export interface Background {
    repeat: null
    color: null
    url: string
    isPrivate: boolean
}
export interface User {
    userId: string
    name: string
    image: string
    imageBig: string
    premium: boolean
    isFollowed: boolean
    isMypixiv: boolean
    isBlocking: boolean
    background: Background
    sketchLiveId: null
    partial: number
    acceptRequest: boolean
    sketchLives: Array<undefined>
}
export type Users = Record<number,User>
