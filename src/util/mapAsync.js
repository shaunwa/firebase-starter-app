// This is a utility function that allows us to "map"
// when the callback function is asynchronous - i.e. when
// we want to upload several files asynchronously and then
// get the URLs
export const mapAsync = async (arr, func) =>
    Promise.all(arr.map(item => func(item)));
