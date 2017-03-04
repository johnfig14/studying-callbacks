import FS from 'fs';

const callback = (err, data) => {
    if(err) throw err;
    console.log(data.toString());
};

FS.readFile('hello.txt', callback);