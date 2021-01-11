export interface NavigationOptions {
    headerStyle: any,
    headerLeft: () => React.ReactNode,
    headerRight: () => React.ReactNode,
    headerTitle: string
}

export interface RootState {
    isLoadingOverlayVisible: boolean
}

export interface PressInfo {
    x: number,
    y: number,
    width: number,
    height: number,
    imageSource: any,
    borderRadius: number,
    callback?: () => void,
    scale?: number
}