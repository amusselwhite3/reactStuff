export const DATA_RECIEVED = 'DATA_RECIEVED';

import Data from './data.json';

export function getData() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            response.json().then((responseJson) => {
                let networkData = responseJson;
                dispatch({type:DATA_RECIEVED, data: networkData});
            })
        })
    };
}