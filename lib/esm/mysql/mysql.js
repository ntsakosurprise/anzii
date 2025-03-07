
import * as methods from "./methods"




class Mysql{
  
  
  constructor(pao){

    this.pao = pao 
    

    // // methods

   

     this.init = methods.init
     this.handleMysqlDataRequest = methods.handleMysqlDataRequest 
     this.insertOne = methods.insertOne 
     this.insertMany = methods.insertMany 
     this.find = methods.find 
     this.findOne = methods.findOne
     this.findIterateItemPromise = methods.findIterateItemPromise
     this.remove = methods.remove
     this.updateOne = methods.updateOne
     this.set = methods.set
     this.queryOptions = methods.queryOptions 
     this.queryTemplate = methods.queryTemplate 
     this.TRANSACTION = methods.TRANSACTION 
     this.PROCEDURE = methods.PROCEDURE 
     this.JOIN = methods.JOIN
     this.SEARCH = methods.SEARCH
     this.procedure = methods.procedure 
     this.transaction = methods.transaction
     this.join = methods.join
     this.joinExek = methods.joinExek
     this.joinStatement = methods.joinStatement 
     this.joinConditionsFormat = methods.joinConditionsFormat
     this.search = methods.search 
     this.searchExek = methods.searchExek 
     this.searchStatement = methods.searchStatement
     this.searchConditionsFormat = methods.searchConditionsFormat 
     this.searchOptions = methods.searchOptions
     this.combineFields = methods.combineFields
     this.insert = methods.insert 
     this.procedureUpdate = methods.procedureUpdate 
     this.procedureDelete = methods.procedureDelete 
     this.procedureSelect = methods.procedureSelect
     this.rollback = methods.rollback
    //  this.deleteOne = methods.deleteOne
     this.searchFieldsFormat = methods.searchFieldsFormat 
     this.fieldFormat = methods.fieldFormat
     this.options = methods.options
     this.sort = methods.sort 
     this.limit = methods.limit
     this.parseGroup = methods.parseGroup 
     this.parseFormatCondition = methods.parseFormatCondition 
     this.getOperand = methods.getOperand
     this.conditionsConnector = methods.conditionsConnector 
     this.updateandtake = methods.updateandtake 
     this.insertandtake = methods.insertandtake 
     this.deleteandtake = methods.deleteandtake
     this.updateJoinTemplate = methods.updateJoinTemplate 
     this.multiTableUpdate = methods.multiTableUpdate 
     this.take = methods.take
     this.takeSql = methods.takeSql 
     this.removeJoin = methods.removeJoin
    

  }


  

}

export default Mysql