import axios from 'axios';
export function fetchListData(){
  return axios.get('/api').then(res => res.data);
}