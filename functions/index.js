const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const uuid = require('uuid-v4');
const { Storage } = require( '@google-cloud/storage' )
const storage = new Storage({
    projectId: 'lambe-lambe-reactnative-back',
    keyFilename: 'lambe-lambe-backend.json'

})
exports.uploadImage = functions.https.onRequest((request, response) => {
    console.log('Aqui 1')
    cors( request, response, () =>{      
        try {
            console.log('Aqui 2');
            fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image,  'base64')
            
            const bucket = storage.bucket('lambe-lambe-reactnative-back.appspot.com')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.jpg', {
              uploadType: 'media',
              destination: `/posts/${id}.jpg`,
              metadata: {
                metadata: {
                  contentType: 'image/jpeg',
                  firebaseStorageDownloadTokens: id
                }
              }
                
            }, (err, file )=>{
                console.log('Aqui 3')
                if(err){           
                    console.log('Aqui 4', err)         
                    return response.status(500).json({error: err})
                }else{                 
                    console.log('Aqui 5', file.name)                       
                    const fileName = encodeURIComponent( file.name )
                    console.log('filename', fileName);
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
                    + bucket.name + '/o/' + fileName + '?alt=media&token=' + id
                    console.log('imageUrl' + imageUrl);
                    console.log('imageUrl', imageUrl);
                    return response.status(201).json({ imageUrl: imageUrl})    

                }
            })
      } catch (err) {          
        console.log('Aqui 6', err)
          return response.status(500).json({ error: err })
      }
  })
});
