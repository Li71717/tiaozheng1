const http = uni.$u.http
const rootIp = 'localhost'
const rootUrl = 'http://'+rootIp+'/shoppayshopsmglianzi_php/public/'

export const staticUrl = rootUrl+'static/'
export const serverUrl = rootUrl+'index.php/Index/Client/'
export const fileUrl = rootUrl+'static/upload/'
export const uploadUrl = rootUrl+'index.php/Index/Client/upload'

export const listj = (data) => http.get('listAll', data)
export const findj = (data) => http.get('find', data)
export const savej = (data) => http.get('save', data)
export const deletej = (data) => http.get('delete', data)
export const listSqlj = (data) => http.get('listSql', data)
export const saveWxUser = (data) => http.get('saveWxUser', data)
export const listCount = (data) => http.get('listCount', data)
