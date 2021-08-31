import {
    request
} from './request'

export function getCategoryData() {
    return request({
        url: '/category'
    })
}
export function getSubcategoryData(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}