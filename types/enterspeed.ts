export type EnterspeedResponseMeta = {
  status: number
  redirect: string | null
  missingViewReferences: string[]
}

export type EnterspeedUrlResponse<RouteType = unknown, ViewsType = unknown> = {
  route: RouteType
  meta: EnterspeedResponseMeta
  views: ViewsType
}

export type UseEnterspeedInput = {
  url?: string
  handles?: EnterspeedHandle[]
}

export type EnterspeedHandle = 'navigation' | 'home';
export type EnterspeedPageType = 'contentPage';

export type EnterspeedNavigationItem = {
  label: string
  type: string
  href: string
  sortOrder: number
  children?: EnterspeedNavigationItem[]
}

//TODO: Update to match expected types in project (this is from old boilerplate)
export type EnterspeedContentPageRoute = {
  type: EnterspeedPageType
  headline: string
  seoMetaDescription: string
  url: string
  children: EnterspeedContentPageRoute[]
  hero?: {
    header?: string
    description?: string
    ctaCaption: string
    ctaLink: {
      url: string
      name: string
    }
  }
}

export type EnterspeedContentPage = EnterspeedUrlResponse & {
  route: EnterspeedContentPageRoute
}
