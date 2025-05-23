const http = uni.$u.http
const rootIp = '127.0.0.1'
const rootUrl = 'http://'+rootIp+':8000/'

export const serverUrl = rootUrl+'database/'
export const staticUrl = rootUrl+'static/'
export const fileUrl = rootUrl+'static/upload/';
export const uploadUrl = rootUrl+'database/upload';

export const listj = (data) => http.get('list', data)
export const findj = (data) => http.get('find', data)
export const savej = (data) => http.get('save', data)
export const deletej = (data) => http.get('delete', data)
export const listSqlj = (data) => http.get('listSql', data)
export const saveWxUser = (data) => http.get('saveWxUser', data)