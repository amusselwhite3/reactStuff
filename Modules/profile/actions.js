export const DATA_RECIEVED = 'DATA_RECIEVED';

import Data from './data.json';

export function getData() {
    return (dispatch) => {
        placeholderData = [];
        for (var i = 0; i<5000; i++){
            placeholderData[i] = {title:"Transaction: " + i, data:((Math.random() * 100).toFixed(2))};
        }
        console.log(placeholderData);
        dispatch({type:DATA_RECIEVED, data: placeholderData});
        console.log("DONE");
        // fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //     response.json().then((responseJson) => {
        //         let networkData = responseJson;
        //         console.log(networkData);
        //         dispatch({type:DATA_RECIEVED, data: networkData});
        //     })
        // })
    };
}