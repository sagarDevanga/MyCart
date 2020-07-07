import {postData} from './common/Networking'

export function register(url,payload)
{
    return postData(url,payload)
}