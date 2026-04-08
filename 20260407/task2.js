class StorageProvider{
    constructor(){}
    upload(file){
        throw new Error("Method not implemented");
    }
    download(filename){
        throw new Error("Method not implemented");
    }
} 

class LocalStorageProvider extends StorageProvider{
    constructor(){
        super();
    }
    upload(file){
        return `Uploading ${file} to local storage`;
    }
    download(filename){
        return `Uploading ${filename} fron local storage`;
    }
}

class CloudStorageProvider extends StorageProvider{
    constructor(){
        super();
    }
    upload(file){
        return `Uploading ${file} to cloud`;
    }
    download(filename){
        return `Downloading ${filename} from clond`;
    }
}

function useStorage(provider){
    if(typeof provider.upload !== "function" || typeof provider.download !== "function"){
        throw new Error("Invalid storage provider");
    }

}

useStorage(new LocalStorageProvider());
// Работает

useStorage({});
// Ошибка: Неверный storage provider
