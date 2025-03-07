


export const init = function(){
  
  
  this.adLog('FileMan has been initialised') 
  this.listens({
		
	'save-file': this.handleSaveFile.bind(this),
	// 'remove-file': this.handleRemoveFile.bind(this),
	'take-system-base': this.handleTakeSystemBase.bind(this),
	'get-file': this.handleGetFile.bind(this)
   
  })

	
}


export const handleParseFile = async function(data){

	
	const self = this 

	const {fileName,size,save} = data 
	
      	self
      	.validateFile(fileName,size)
      	.then((valid)=>{
      		
      		if(save){
      			
      			self.beginFileSave(data)
	        .then((response)=>{
		
		        self.callback(null,response)
	        })
	       .catch((e)=>{

			self.callback(e,null)
		   })
	
      			
      			
      		}else{
      			
      			self.callback(null,valid)
      		}
      	})
      	.catch((e)=>{
      		
      		reject(new Error(e.message))
      		
      	})
	
   

} 

export const handleSaveFile = async function(data){

	
	const self = this 
	self.callback = data.callback
	await self.log('HANDLE SAVE FILE DATA')
	await self.log(data)

	
	if(data.multiple){

	}else{

		let firstKey = Object.keys(data.files)[0]
		self.log('FIRST KEY')
		self.log(firstKey)
		let file = data.files[firstKey]
		self.log(file)
		self.beginFileSave({path: file.path,dir: data.dir,old: data.old,saveType: data.saveType,userID: data.ID})
		.then((response)=>{
			self.pao.pa_wiLog('FILEHANDLE FILE SAVE')
			self.pao.pa_wiLog(response)
			self.callback(null,response)
		})
		.catch((e)=>{
			
			self.pao.pa_wiLog('FILEHANDLE FILE SAVEERROR')
			self.pao.pa_wiLog(e)
			self.callback(e,null)
		})

	}
	
	
	
	
  

} 

export const handleGetFile = async function(data){

	
	const self = this
	const pao = self.pao 
	const path = self.path 
	const fs = self.fs
	let fileName = data.fileName 
	let fileDir = data.filePath
	let getType = data.getType 
	const getFiles = pao.pa_getFiles
	const getExtension = pao.pa_getExtension
	 
	
	self.infoSync('HANDLING GET FILE')
	let dir = `${self.system.DOCUMENT_ROOT}${path.sep}${fileDir}`
	self.infoSync(dir)
	// self.pao.pa_wiLog('FILEMAN DIR AND DATA')
	// self.log(dir)
	// self.log(data)


	if(getType === 'stream'){

		self.pao.pa_wiLog('THE TYPE OF FILE TO BE RETRIEVED IS A STREAM')
		let realFile = await getFiles(dir,{recursive: false},fileName) 
		

		if(realFile){

			let readStream = fs.createReadStream(`${dir}${path.sep}${fileName}`)
			let ext = getExtension(realFile)
			return data.callback({readStream: readStream,ext: ext})

		}else{

			return data.callback({readStream: null,ext: ext})

		}
		
		
	}else{

		
		let ext = getExtension(realFile)
		let realFile = await getFiles(dir,{recursive: false},fileName)
		return data.callback({filePath: `${dir}${path.sep}${fileName}`,ext: ext})
	}
	
	// self.beginFileSave(data)
	// .then((response)=>{
		
	// 	self.callback(null,response)
	// })
	// .catch((e)=>{
		
	// 	self.callback(e,null)
	// })
	
	
  

} 

export const handleTakeSystemBase = function(data){

	
	const self = this 
	// self.log('THE SYSTEMBASE HANDLE')
	// self.log(data)
	self.system = data.systemBase
	
	
  

} 

export const beginFileSave = function(file){

	
	 const self = this 
	
    return new Promise((resolve,reject)=>{
   
      	// self
      	// .validateFile(file)
      	// .then((valid)=>{
      		
      	// 	self
      	// 	.saveFile(file)
      	// 	.then((savedFile)=>{
      			
      	// 		resolve(savedFile)
      	// 	})
      	// 	.catch((e)=>{
      			
      	// 		reject(new Error(e))
      	// 	})
      		
      	// }).
      	// catch((e)=>{
      		
      	// 	reject(new Error(e))
      	// })
		//   if(file.saveType === 'save'){

			// self
      		// .saveFile(file)
      		// .then((savedFile)=>{
				  
			// 	if(saveType === 'unlinkold'){

				  

			// 	return	self.deleteFile(file.old)
			// 			.then((deleted)=>{

			// 				resolve(deleted)

			// 			})
			// 			.catch((e)=>{

			// 				reject(e)

			// 			})
			// 	}

      		// 	resolve(savedFile)
      		// })
      		// .catch((e)=>{
      			
      		// 	reject(new Error(e))
      		// })

		//   }else{

			self
      		.renameFile(file.path,file.dir,file.userID)
      		.then(async (renamedFile)=>{
				  
				await self.log('THE RENAMED FILE')
				await self.log(file)
				if(file.saveType === 'unlinkold'){

				   let old = file.old 
				   let oldChunks = old.split('_')
				   await self.log('THE OLD FILE MUST BE DELETED')
				   await self.log(oldChunks)
				   
				   if(oldChunks[2] === '0') return resolve(renamedFile)

					await self.log('ABOUT TO DELETE THE FILE')
					

					return	self.deleteFile(file.dir,file.old)
							.then(async (deleted)=>{
	
								await self.log('A FILE HAS BEEN DELETED')
								await self.log(deleted)
								resolve({url: renamedFile.url,deltedFile: true})
	
							})
							.catch((e)=>{
								
								self.log('THE DELETION HAS FAILED WITH ERROR')
								self.log(e)
								resolve({url: renameFile.url,deletedFile: false})
								//reject(e)
	
							})
				}
	
					  
      			resolve(renamedFile)
      		})
      		.catch((e)=>{
      			
      			reject(new Error(e))
      		})

		 // }
		  
     
  	  
    	
    })
} 


export const handleMakeFile = function(data){

	
	const self = this 
    self.getJobs(data)

} 

export const handleRenameFile = async function(oldPath){

	
	const self = this 

	self.renameFile(oldPath)
	.then((newFile)=>{
		
		self.callback(null,newFile)
	})
	.catch((e)=>{
		
		self.callback(e,null)
	})
	

} 





export const deleteFile = async function(dir,fileName){

	
	const self = this 
	const fs = self.fs 
	const path = self.path 

	await self.log('THE DELETE METHOD')

	let filePath = `${self.system.DOCUMENT_ROOT}${path.sep}${dir}${path.sep}${fileName}`
	await self.log(filePath)
   
   return new Promise((resolve,reject)=>{
	   
	
	   fs.unlink(filePath,async (err,deleted)=>{

		await self.log('THE DELETION RESPONSE::DELETE')
		await self.log(deleted)
		resolve(true)

	 })
	//    .then(async (delted)=>{
	// 	   await self.log('THE DELETION RESPONSE')
	// 	   await self.log(deleted)
	// 	   resolve(true)
	// 	})
	// 	.catch((e)=>{reject(e)})
   	
   })

}

export const generateFileName = function(fileName,ID=0){

	
	const self = this 
	const pao = self.pao 
	const generateUniqueID = pao.pa_generateUniqueID
	// const crypto = self.crypto 
  
  return new Promise((resolve,reject)=>{
  	
  	    // create pseudo random bytes 
  	    // const bytes = crypto.pseudoRandomBytes(32);
  	   // create the md5 hash of the random bytes 
		  // const checksum = crypto.createHash('MD5').update(bytes).digest('hex');
		  let name = `uid_ID_${ID}_${generateUniqueID()}`
  	    
  	    self
    	  .FileType.fromFile(fileName)
    	  .then((type)=>{
    	  	
    	  	  if(type.ext){
    	  	  	
    	  	  	  resolve(`${name}.${type.ext}`)
    	  	  	 
    	  	  }else{
    	  	  	
    	  	  	 reject(new Error('Extension Error'))
    	  	  }
    	  	 
    	  })
  	    
  	    

  	
  })

} 

export const validateFile = function(fileName,size=0){

	
	const self = this 
	
	
    return new Promise((resolve,reject)=>{
    	
    	
    	 self
    	  .FileType.fromFile(fileName)
    	  .then((type)=>{
    	 	
    	 	   	 if(self.supportedFileTypes.indexOf(type.ext) < 0){
    	 	
    	 	          reject('Filetype not supported')
    	        }else{
    	 	
    	 	          if(size > 0){
    	 	          	
    	 	          	 if(size > fileName.size){
    	 	          	 	
    	 	          	 	  reject(new Error('File exceed accepted size'))
    	 	          	 	
    	 	          	 }else{
    	 	          	 	
    	 	          	 	resolve(true)
    	 	          	 }
    	 	          	
    	 	          }else{
    	 	          
    	 	           resolve(true)
    	 	          
    	 	          }
    	          }
    	  }).catch((e)=>{
    	  	
    	  	   reject(new Error(e.message))
    	  })
    	
   
    	  
    })

} 

export const saveFile = async function(file){

	
	const self = this 
	const pao = self.pao 
	const fs = self.fs 
	let {fileName,path,generateName} = file
  	let name = generateName ? await self.generateFileName(fileName) : fileName
  
  return new Promise((resolve,reject)=>{
  	
  	
		if(!( name instanceof String)) return reject(new Error(name.message))
			
		let savePath = `${self.dir}${path}${name}`
		let wStream = fs.createWriteStream(savePath) 
		let rStream = fs.createReadStream(name) 
		
		wStream.on('end',()=>{
			
			resolve({savedFile: savePath})
		})
		
		wStream.on('error',()=>{
			
			reject(new Error('Writablestream encountered an error'))
			
		})
		
		rStream.on('error',()=>{
			
			reject(new Error('Readablestream encountered an error'))
			
		})
		
		rStream.pipe(wStream) 
 
  	
  })
  
 
} 


export const renameFile = async function(fileName,dir,ID){
	
	const self = this 
	const fs = self.fs 
	const path = self.path
	self.pao.pa_wiLog('BEFORE RENAME')
	let name = await self.generateFileName(fileName,ID)
	self.pao.pa_wiLog('THE NAME RENAME FILE')
	self.pao.pa_wiLog(name)
	let newPath = `${self.system.DOCUMENT_ROOT}${path.sep}${dir}${path.sep}${name}`
	
	return new Promise((resolve,reject)=>{
		
		 fs.rename(fileName,newPath,(e)=>{
			
			self.pao.pa_wiLog('the file has been renammed')
			if(e) return reject(e)
			resolve({url: name})


		 })
		//  .then((newFile)=>{

		// 	self.pao.pa_wiLog('FILE SAVE BY RENAME NEWFILE')
		// 	self.pao.pa_wiLog(newFile)
		// 	self.pao.pa_wiLog(newPath)
		 	 
		//  	//  resolve(newFile)
		 	 
		//  })
		//  .catch((e)=>{
		 	
		//  	reject(e)
		 	
		//  })
		
	})
	
}

export const getFile = async function(data){
	
	const self = this 
	const fs = self.fs 
	let name = await self.generateFileName(fileName)
	
	return new Promise((resolve,reject)=>{
		
		 fs.rename(fileName,name)
		 .then((newFile)=>{
		 	 
		 	 resolve(newFile)
		 	 
		 })
		 .catch((e)=>{
		 	
		 	reject(new Error(e.message))
		 	
		 })
		
	})
	
}









