// This is a utility function that simplifies
// the code for uploading images in the rest of our
// application.
export const readFile = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
            
        reader.onload = e => {
            resolve(e.target.result);
        };

        reader.onerror = () => {
            reader.abort();
            reject('An error occurred while reading the file');
        };
        
        reader.readAsDataURL(file);
    });
};
