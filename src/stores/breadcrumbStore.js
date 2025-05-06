import {create} from "zustand";


export const useBreadcrumbStore = create((set) => ({
    breadcrumbs: [],
    setBreadcrumb: (breadcrumbs) => set({breadcrumbs}),
    addBreadcrumb: (breadcrumb) => {
        set((state) => ({
            breadcrumb: [...state.breadcrumbs, breadcrumb]
        }))
    }
}))