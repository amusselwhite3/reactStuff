export const DATA_RECIEVED = 'DATA_RECIEVED';

import Data from './data.json';
//Action that is called to retrieve or generate data and then store that data using a reducer. 
export function getData() {
    return (dispatch) => {
        //Generate 5000 placeholder data entries
        placeholderData = [];
        for (var i = 0; i<5000; i++){
            placeholderData[i] = {title:"Transaction: " + i, data:((Math.random() * 100).toFixed(2))};
        }
        //Dispatch data to the reducer
        dispatch({type:DATA_RECIEVED, data: placeholderData});
        // Functioning network request data using fetch, can replace placeholder data generation for listview. 
        // Placeholder data is being used to make charts more consistent instead of using text stored in network.
        // fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //     response.json().then((responseJson) => {
        //         let networkData = responseJson;
        //         console.log(networkData);
        //         dispatch({type:DATA_RECIEVED, data: networkData});
        //     })
        // })
    };
}