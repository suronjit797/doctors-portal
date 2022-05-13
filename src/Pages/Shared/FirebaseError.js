const FirebaseError = (err) => {
    const str =  err.slice(22, err.length - 2).split('-').join(' ')
    return [str.split('')[0].toUpperCase(), str.split('').slice(1, str.split('').length).join("")].join("")
};

export default FirebaseError;